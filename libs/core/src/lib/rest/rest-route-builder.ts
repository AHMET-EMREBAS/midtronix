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

export class RestRouteBuilder {
  protected readonly AP: RestApiPaths;
  protected readonly RP: ResourcePermissions;
  private constructor(
    protected readonly className: string,
    protected readonly validationPipe: typeof ValidationPipe
  ) {
    this.AP = RestApiPathBuilder.get(className);
    this.RP = PermissionBuilder.get(className);
  }

  static get(className: string, validationPipe = ValidationPipe) {
    return new RestRouteBuilder(className, validationPipe);
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
      Controller(),
      ResourceNameMeta.set(this.className),
      ApiTags(this.className + 'Controller')
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
      this.RP.CanRead(),
      ApiQuery({ type }),
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

  SaveOne(requestBody?: any) {
    return applyDecorators(
      Post(this.AP.SINGULAR_PATH),
      ApiOperation({
        summary: `Save one ${this.className}`,
        requestBody,
      }),
      ApiBody({ type: requestBody }),
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

  UpdateOne(requestBody?: any) {
    return applyDecorators(
      Put(this.AP.BY_ID_PATH),
      ApiOperation({
        summary: `Update one ${this.className} by id`,
        requestBody,
      }),
      ApiOkResponse({ description: 'Success' }),
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

  Query() {
    return Query(this.validationPipe);
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

  Auth() {
    return AuthParam(this.validationPipe);
  }
}
