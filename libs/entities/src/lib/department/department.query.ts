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
import { Department } from './department.entity';
import { FindOperator } from 'typeorm';
import { DepartmentMetadataInstance } from './department.meta';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IDepartment } from '@mdtx/models';

@Exclude()
export class DepartmentWhereQueryDto
  extends BaseWhereQueryDto<Department>
  implements
    AllPropertyType<Omit<IDepartment, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class DepartmentQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Department>(['name'])
  search!: DepartmentWhereQueryDto;

  @WhereProperty(DepartmentWhereQueryDto)
  where!: DepartmentWhereQueryDto;

  @OrderProperty<Department>(DepartmentMetadataInstance.propertyNames())
  order: any;
}
