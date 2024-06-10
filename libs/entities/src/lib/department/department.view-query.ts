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

import { IDepartmentView } from '@mdtx/models';
import { DepartmentView } from './department.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { DepartmentMetadataInstance } from './department.metata';

@Exclude()
export class DepartmentViewWhereQueryDto
  extends BaseWhereQueryDto<DepartmentView>
  implements
    AllPropertyType<
      Omit<IDepartmentView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  departmentId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class DepartmentViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'notes', 'departmentId'])
  search!: DepartmentViewWhereQueryDto;

  @WhereProperty(DepartmentViewWhereQueryDto)
  where!: DepartmentViewWhereQueryDto;

  @OrderProperty(DepartmentMetadataInstance.propertyNames())
  order: any;
}
