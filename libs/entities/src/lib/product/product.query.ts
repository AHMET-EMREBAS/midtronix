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
import { Product } from './product.entity';
import { FindOperator } from 'typeorm';

import { ProductMetadataInstance } from './product.metata';

@Exclude()
export class ProductWhereQueryDto extends BaseWhereQueryDto<Product> {
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class ProductQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Product>(['name'])
  search!: ProductWhereQueryDto;

  @WhereProperty(ProductWhereQueryDto)
  where!: ProductWhereQueryDto;

  @OrderProperty<Product>(ProductMetadataInstance.propertyNames())
  order: any;
}
