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
import { Supplier } from './supplier.entity';
import { FindOperator } from 'typeorm';

import { SupplierMetadataInstance } from './supplier.metata';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { ISupplier } from '@mdtx/models';

@Exclude()
export class SupplierWhereQueryDto
  extends BaseWhereQueryDto<Supplier>
  implements
    AllPropertyType<Omit<ISupplier, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  description!: FindOperator<string>;
}

@Exclude()
export class SupplierQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Supplier>(['name'])
  search!: SupplierWhereQueryDto;

  @WhereProperty(SupplierWhereQueryDto)
  where!: SupplierWhereQueryDto;

  @OrderProperty<Supplier>(SupplierMetadataInstance.propertyNames())
  order: any;
}
