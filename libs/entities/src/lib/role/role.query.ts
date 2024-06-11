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
import { Role } from './role.entity';
import { FindOperator } from 'typeorm';
import { RoleMetadataInstance } from './role.metata';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IRole } from '@mdtx/models';

@Exclude()
export class RoleWhereQueryDto
  extends BaseWhereQueryDto<Role>
  implements
    AllPropertyType<Omit<IRole, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class RoleQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Role>(['name'])
  search!: RoleWhereQueryDto;

  @WhereProperty(RoleWhereQueryDto)
  where!: RoleWhereQueryDto;

  @OrderProperty<Role>(RoleMetadataInstance.propertyNames())
  order: any;
}
