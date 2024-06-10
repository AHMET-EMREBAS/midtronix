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
import { ProductMetadataInstance } from './product.metata';

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
  productId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class ProductViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'productId'])
  search!: ProductViewWhereQueryDto;

  @WhereProperty(ProductViewWhereQueryDto)
  where!: ProductViewWhereQueryDto;

  @OrderProperty(ProductMetadataInstance.propertyNames())
  order: any;
}
