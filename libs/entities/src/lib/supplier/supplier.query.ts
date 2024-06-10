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

@Exclude()
export class SupplierWhereQueryDto extends BaseWhereQueryDto<Supplier> {
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
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
