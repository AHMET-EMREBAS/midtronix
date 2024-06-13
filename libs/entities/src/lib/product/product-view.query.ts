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

import { IProductView } from '@mdtx/models';
import { ProductView } from './product.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { ProductViewMetadataInstance } from './product.metata';

@Exclude()
export class ProductViewWhereQueryDto
  extends BaseWhereQueryDto<ProductView>
  implements
    AllPropertyType<
      Omit<IProductView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  serialNumberRequired!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  description!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  brand!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  upc!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  price!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  cost!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  quantity!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  supplier!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  category!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  eid!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class ProductViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<ProductView>([
    'name',
    'eid',
    'serialNumberRequired',
    'description',
    'brand',
    'upc',
    'notes',
    'price',
    'cost',
    'quantity',
    'supplier',
    'category',
  ])
  search!: ProductViewWhereQueryDto;

  @WhereProperty(ProductViewWhereQueryDto)
  where!: ProductViewWhereQueryDto;

  @OrderProperty(ProductViewMetadataInstance.propertyNames())
  order: any;
}
