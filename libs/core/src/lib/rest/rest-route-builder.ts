import { RestApiPathBuilder, RestApiPaths } from '@mdtx/utils';

import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Type,
  applyDecorators,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import {
  AuthParam,
  PermissionBuilder,
  ResourceNameMeta,
  ResourcePermissions,
} from '../auth';
import { Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CreateValidationPipe, ValidationPipe } from '../dto';
import { ApiVersion } from '@mdtx/common';

export class RestRouteBuilder {
  protected readonly AP: RestApiPaths;
  protected readonly RP: ResourcePermissions;
  private constructor(
    protected readonly className: string,
    protected readonly validationPipe: typeof ValidationPipe,
    protected readonly version: ApiVersion = ApiVersion.v1
  ) {
    this.AP = RestApiPathBuilder.get(className);
    this.RP = PermissionBuilder.get(className);
  }

  static get(className: string, version = ApiVersion.v1) {
    return new RestRouteBuilder(className, ValidationPipe, version);
  }

  protected CommonResponses() {
    return applyDecorators(
      ApiInternalServerErrorResponse({ description: 'Internal Server Error!' }),
      ApiUnauthorizedResponse({ description: 'User not authorized!' }),
      ApiUnprocessableEntityResponse({
        description: 'Input validation error or Unique constraint!',
      })
    );
  }

  Controler() {
    return applyDecorators(
      Controller(this.version),
      ResourceNameMeta.set(this.className),
      ApiBearerAuth(),
      ApiTags(`${this.className}Controller-${this.version}`)
    );
  }

  Metadata() {
    return applyDecorators(
      Get(this.AP.METADATA_PATH),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanRead(),
      this.CommonResponses()
    );
  }

  Count() {
    return applyDecorators(
      Get(this.AP.COUNT_PATH),
      this.RP.CanRead(),
      this.CommonResponses()
    );
  }

  FindAll(type?: any) {
    return applyDecorators(
      Get(this.AP.PLURAL_PATH),
      ApiOperation({ summary: `Find all ${this.className} by query` }),
      ApiOkResponse({ description: 'Success' }),
      ApiQuery({ type }),
      this.RP.CanRead(),
      this.CommonResponses()
    );
  }

  FindOneById() {
    return applyDecorators(
      Get(this.AP.BY_ID_PATH),
      ApiOperation({ summary: `Find one ${this.className} by id` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanRead(),
      this.CommonResponses()
    );
  }

  FindOne() {
    return applyDecorators(
      Get(this.AP.SINGULAR_PATH),
      ApiOperation({ summary: `Find one ${this.className} by query` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanRead(),
      this.CommonResponses()
    );
  }

  SaveOne(type?: any) {
    return applyDecorators(
      Post(this.AP.SINGULAR_PATH),
      ApiOperation({ summary: `Save one ${this.className}` }),
      ApiBody({ type }),
      ApiCreatedResponse({ description: 'Success' }),
      this.RP.CanWrite(),
      this.CommonResponses()
    );
  }

  DeleteOne() {
    return applyDecorators(
      Delete(this.AP.BY_ID_PATH),
      ApiOperation({ summary: `Delete one ${this.className} by id` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanDelete(),
      this.CommonResponses()
    );
  }

  UpdateOne(type?: any) {
    return applyDecorators(
      Put(this.AP.BY_ID_PATH),
      ApiOperation({ summary: `Update one ${this.className} by id` }),
      ApiOkResponse({ description: 'Success' }),
      ApiBody({ type }),
      this.RP.CanUpdate(),
      this.CommonResponses()
    );
  }

  AddRelation() {
    return applyDecorators(
      Put(this.AP.RELATION_NAME_AND_ID_PATH),
      ApiOperation({ summary: `Add relatin to  ${this.className}` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanUpdate(),
      this.CommonResponses()
    );
  }

  RemoveRelation() {
    return applyDecorators(
      Delete(this.AP.RELATION_NAME_AND_ID_PATH),
      ApiOperation({ summary: `Remove relatin from  ${this.className}` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanUpdate(),
      this.CommonResponses()
    );
  }

  SetRelation() {
    return applyDecorators(
      Post(this.AP.RELATION_NAME_AND_ID_PATH),
      ApiOperation({ summary: `Set relatin to  ${this.className}` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanWrite(),
      this.CommonResponses()
    );
  }

  UnsetRelation() {
    return applyDecorators(
      Delete(this.AP.RELATION_NAME_PATH),
      ApiOperation({ summary: `Unset relatin from  ${this.className}` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanDelete(),
      this.CommonResponses()
    );
  }

  Query(expectedType: Type) {
    return Query(CreateValidationPipe(expectedType));
  }

  Body(expectedType?: Type) {
    return Body(
      expectedType ? CreateValidationPipe(expectedType) : this.validationPipe
    );
  }

  ParamID() {
    return Param('id', ParseIntPipe);
  }

  Param() {
    return Param(this.validationPipe);
  }

  AuthParam() {
    return AuthParam();
  }
}
