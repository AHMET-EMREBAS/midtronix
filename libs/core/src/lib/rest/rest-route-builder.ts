/* eslint-disable @typescript-eslint/no-explicit-any */
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
  ApiBadRequestResponse,
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
  OmitType,
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
import {
  CountResponse,
  UnprocessableEntityResponse,
  InternalServerErrorResponse,
  MessageResponse,
  UnauthorizedResponse,
} from '../response';

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
      ApiInternalServerErrorResponse({
        description: 'Internal Server Error',
        type: InternalServerErrorResponse,
      }),
      ApiUnauthorizedResponse({
        description: 'Unauthorized',
        type: UnauthorizedResponse,
      }),
      ApiUnprocessableEntityResponse({
        description: 'Input Validation Error',
        type: UnprocessableEntityResponse,
      }),
      ApiBadRequestResponse({
        description: 'Bad Request',
        type: MessageResponse,
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

  /**
   *
   * @param responseType
   * @returns
   */
  Metadata(responseType?: any) {
    return applyDecorators(
      Get(this.AP.METADATA_PATH),
      ApiOkResponse({ description: 'Success', type: responseType }),
      this.RP.CanRead(),
      this.CommonResponses()
    );
  }

  /**
   *
   * @param queryType QueryDto type
   * @returns
   */
  Count(queryType?: Type<any>) {
    return applyDecorators(
      Get(this.AP.COUNT_PATH),
      ApiOperation({ summary: `Count all ${this.className}` }),
      this.RP.CanRead(),
      ApiQuery({
        type:
          queryType &&
          OmitType(queryType, ['withDeleted', 'take', 'skip', 'order']),
      }),
      ApiOkResponse({ description: 'Success', type: CountResponse }),
      this.CommonResponses()
    );
  }

  /**
   * @param queryType
   * @param resultType
   * @returns
   */
  FindAll(queryType?: Type<any>, responseType?: Type<any>) {
    return applyDecorators(
      Get(this.AP.PLURAL_PATH),
      ApiOperation({ summary: `Find all ${this.className} by query` }),
      ApiOkResponse({
        description: 'Success',
        type: responseType,
        isArray: true,
      }),
      ApiQuery({ type: queryType }),
      this.RP.CanRead(),
      this.CommonResponses()
    );
  }

  /**
   * @param responseType
   * @returns
   */
  FindOneById(responseType?: Type<any>) {
    return applyDecorators(
      Get(this.AP.BY_ID_PATH),
      ApiOperation({ summary: `Find one ${this.className} by id` }),
      ApiOkResponse({ description: 'Success', type: responseType }),
      this.RP.CanRead(),
      this.CommonResponses()
    );
  }

  /**
   * @param queryType
   * @param resopnseType
   * @returns
   */
  FindOne(queryType?: Type<any>, resopnseType?: Type<any>) {
    return applyDecorators(
      Get(this.AP.SINGULAR_PATH),
      ApiOperation({ summary: `Find one ${this.className} by query` }),
      ApiOkResponse({ description: 'Success', type: resopnseType }),
      ApiQuery({ type: queryType }),
      this.RP.CanRead(),
      this.CommonResponses()
    );
  }

  /**
   *
   * @param bodyType
   * @param responseType
   * @returns
   */
  SaveOne(bodyType?: Type<any>, responseType?: Type<any>) {
    return applyDecorators(
      Post(this.AP.SINGULAR_PATH),
      ApiOperation({ summary: `Save one ${this.className}` }),
      ApiBody({ type: bodyType }),
      ApiCreatedResponse({ description: 'Success', type: responseType }),
      this.RP.CanWrite(),
      this.CommonResponses()
    );
  }

  /**
   *
   * @param responseType
   * @returns
   */
  DeleteOne(responseType?: Type<any>) {
    return applyDecorators(
      Delete(this.AP.BY_ID_PATH),
      ApiOperation({ summary: `Delete one ${this.className} by id` }),
      ApiOkResponse({ description: 'Success', type: responseType }),
      this.RP.CanDelete(),
      this.CommonResponses()
    );
  }

  /**
   *
   * @param bodyType
   * @param responseType
   * @returns
   */
  UpdateOne(bodyType?: any, responseType?: any) {
    return applyDecorators(
      Put(this.AP.BY_ID_PATH),
      ApiOperation({ summary: `Update one ${this.className} by id` }),
      ApiOkResponse({ description: 'Success', type: responseType }),
      ApiBody({ type: bodyType }),
      this.RP.CanUpdate(),
      this.CommonResponses()
    );
  }

  /**
   *
   * @param responseType
   * @returns
   */
  AddRelation(responseType?: Type<any>) {
    return applyDecorators(
      Put(this.AP.RELATION_NAME_AND_ID_PATH),
      ApiOperation({ summary: `Add relatin to  ${this.className}` }),
      ApiOkResponse({ description: 'Success', type: responseType }),
      this.RP.CanUpdate(),
      this.CommonResponses()
    );
  }

  /**
   *
   * @param responseType
   * @returns
   */
  RemoveRelation(responseType?: Type<any>) {
    return applyDecorators(
      Delete(this.AP.RELATION_NAME_AND_ID_PATH),
      ApiOperation({ summary: `Remove relatin from  ${this.className}` }),
      ApiOkResponse({ description: 'Success', type: responseType }),
      this.RP.CanUpdate(),
      this.CommonResponses()
    );
  }

  /**
   *
   * @param responseType
   * @returns
   */
  SetRelation(responseType?: Type<any>) {
    return applyDecorators(
      Post(this.AP.RELATION_NAME_AND_ID_PATH),
      ApiOperation({ summary: `Set relatin to  ${this.className}` }),
      ApiOkResponse({ description: 'Success', type: responseType }),
      this.RP.CanWrite(),
      this.CommonResponses()
    );
  }

  /**
   *
   * @param responseType
   * @returns
   */
  UnsetRelation(responseType?: Type<any>) {
    return applyDecorators(
      Delete(this.AP.RELATION_NAME_PATH),
      ApiOperation({ summary: `Unset relatin from  ${this.className}` }),
      ApiOkResponse({ description: 'Success', type: responseType }),
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
