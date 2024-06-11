/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BasePaginatorQueryDto,
  SearchProperty,
  QueryOperatorProperty,
  BaseWhereQueryDto,
  OrderProperty,
  WhereProperty,
} from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { Permission } from './permission.entity';
import { FindOperator } from 'typeorm';
import { PermissionMetadataInstance } from './permission.metata';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IPermission } from '@mdtx/models';

@Exclude()
export class PermissionWhereQueryDto
  extends BaseWhereQueryDto<Permission>
  implements
    AllPropertyType<Omit<IPermission, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  resourceName!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  actionName!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class PermissionQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Permission>(['name', 'resourceName', 'actionName'])
  search!: PermissionWhereQueryDto;

  @WhereProperty(PermissionWhereQueryDto)
  where!: PermissionWhereQueryDto;

  @OrderProperty<Permission>(PermissionMetadataInstance.propertyNames())
  order: any;
}
