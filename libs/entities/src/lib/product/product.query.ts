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
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IProduct } from '@mdtx/models';

@Exclude()
export class ProductWhereQueryDto
  extends BaseWhereQueryDto<Product>
  implements
    AllPropertyType<Omit<IProduct, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' }) brand!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) description!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) upc!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) price!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) cost!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) quantity!: FindOperator<string>;

  @Exclude()
  supplier!: FindOperator<string>;

  @Exclude()
  category!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class ProductQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Product>([
    'name',
    'description',
    'brand',
    'upc',
    'notes',
    'price',
    'cost',
    'quantity',
  ])
  search!: ProductWhereQueryDto;

  @WhereProperty(ProductWhereQueryDto)
  where!: ProductWhereQueryDto;

  @OrderProperty<Product>(ProductMetadataInstance.propertyNames())
  order: any;
}
