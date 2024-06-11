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

import { IRoleView } from '@mdtx/models';
import { RoleView } from './role.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { RoleMetadataInstance } from './role.metata';

@Exclude()
export class RoleViewWhereQueryDto
  extends BaseWhereQueryDto<RoleView>
  implements
    AllPropertyType<Omit<IRoleView, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  roleId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class RoleViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'roleId'])
  search!: RoleViewWhereQueryDto;

  @WhereProperty(RoleViewWhereQueryDto)
  where!: RoleViewWhereQueryDto;

  @OrderProperty(RoleMetadataInstance.propertyNames())
  order: any;
}
