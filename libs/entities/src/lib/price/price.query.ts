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
import { Price } from './price.entity';
import { FindOperator } from 'typeorm';
import { PriceMetadataInstance } from './price.meta';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IPrice } from '@mdtx/models';

@Exclude()
export class PriceWhereQueryDto
  extends BaseWhereQueryDto<Price>
  implements
    AllPropertyType<Omit<IPrice, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  price!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  cost!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  sku!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  priceLevel!: FindOperator<string>;

  id?: any;
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class PriceQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Price>(['cost', 'price'])
  search!: PriceWhereQueryDto;

  @WhereProperty(PriceWhereQueryDto)
  where!: PriceWhereQueryDto;

  @OrderProperty<Price>(PriceMetadataInstance.propertyNames())
  order: any;
}
