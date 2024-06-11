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
import { FindOperator } from 'typeorm';

import { IPermissionView } from '@mdtx/models';
import { PermissionView } from './permission.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { PermissionMetadataInstance } from './permission.metata';

@Exclude()
export class PermissionViewWhereQueryDto
  extends BaseWhereQueryDto<PermissionView>
  implements
    AllPropertyType<
      Omit<IPermissionView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  resourceName!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  actionName!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  permissionId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class PermissionViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'permissionId'])
  search!: PermissionViewWhereQueryDto;

  @WhereProperty(PermissionViewWhereQueryDto)
  where!: PermissionViewWhereQueryDto;

  @OrderProperty(PermissionMetadataInstance.propertyNames())
  order: any;
}
