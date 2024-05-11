import { RestApiPathBuilder, RestApiPaths } from '@mdtx/common';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  applyDecorators,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { PermissionBuilder, ResourcePermissions } from './auth';

export class RestRouteBuilder {
  protected readonly AP: RestApiPaths;
  protected readonly RP: ResourcePermissions;
  constructor(protected readonly className: string) {
    this.AP = RestApiPathBuilder.get(className);
    this.RP = PermissionBuilder.get(className);
  }

  protected __common() {
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
      ApiTags(this.className + 'Controller')
    );
  }

  FindAll() {
    return applyDecorators(
      Get(this.AP.PLURAL_PATH),
      ApiOperation({ summary: `Find all ${this.className} by query` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanRead(),
      this.__common()
    );
  }

  FindOneById() {
    return applyDecorators(
      Get(this.AP.BY_ID_PATH),
      ApiOperation({ summary: `Find one ${this.className} by id` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanRead(),
      this.__common()
    );
  }

  SaveOne() {
    return applyDecorators(
      Post(this.AP.SINGULAR_PATH),
      this.__common(),
      ApiOperation({ summary: `Save one ${this.className} ` }),
      ApiCreatedResponse({ description: 'Success' }),
      this.RP.CanWrite(),
      this.__common()
    );
  }

  DeleteOne() {
    return applyDecorators(
      Delete(this.AP.BY_ID_PATH),
      ApiOperation({ summary: `Delete one ${this.className} by id` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanDelete(),
      this.__common()
    );
  }

  UpdateOne() {
    return applyDecorators(
      Put(this.AP.BY_ID_PATH),
      ApiOperation({ summary: `Update one ${this.className} by id` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanUpdate(),
      this.__common()
    );
  }

  AddRelation() {
    return applyDecorators(
      Put(this.AP.RELATION_NAME_AND_ID_PATH),
      ApiOperation({ summary: `Add relatin to  ${this.className}` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanUpdate(),
      this.__common()
    );
  }

  RemoveRelation() {
    return applyDecorators(
      Delete(this.AP.RELATION_NAME_AND_ID_PATH),
      ApiOperation({ summary: `Remove relatin from  ${this.className}` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanUpdate(),
      this.__common()
    );
  }

  SetRelation() {
    return applyDecorators(
      Post(this.AP.RELATION_NAME_AND_ID_PATH),
      ApiOperation({ summary: `Set relatin to  ${this.className}` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanWrite(),
      this.__common()
    );
  }

  UnsetRelation() {
    return applyDecorators(
      Delete(this.AP.RELATION_NAME_PATH),
      ApiOperation({ summary: `Unset relatin from  ${this.className}` }),
      ApiOkResponse({ description: 'Success' }),
      this.RP.CanDelete(),
      this.__common()
    );
  }
}
