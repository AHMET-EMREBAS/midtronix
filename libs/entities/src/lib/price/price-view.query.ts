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

import { IPriceView } from '@mdtx/models';
import { PriceView } from './price.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';

import { PriceViewMetadataInstance } from './price.meta';

@Exclude()
export class PriceViewWhereQueryDto
  extends BaseWhereQueryDto<PriceView>
  implements
    AllPropertyType<Omit<IPriceView, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' }) cost!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) price!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) sku!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) eid!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' })
  priceLevelId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  priceLevelName!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) skuId!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) skuName!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  priceId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class PriceViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<PriceView>([
    'name',
    'eid',
    'cost',
    'price',
    'sku',
    'eid',
    'priceLevelId',
    'priceLevelName',
    'skuId',
    'skuName',
  ])
  search!: PriceViewWhereQueryDto;

  @WhereProperty(PriceViewWhereQueryDto)
  where!: PriceViewWhereQueryDto;

  @OrderProperty(PriceViewMetadataInstance.propertyNames())
  order: any;
}
