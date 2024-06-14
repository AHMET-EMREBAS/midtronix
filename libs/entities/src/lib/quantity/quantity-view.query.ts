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

import { IQuantityView } from '@mdtx/models';
import { QuantityView } from './quantity.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';

import { QuantityViewMetadataInstance } from './quantity.meta';

@Exclude()
export class QuantityViewWhereQueryDto
  extends BaseWhereQueryDto<QuantityView>
  implements
    AllPropertyType<
      Omit<IQuantityView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' }) quantity!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) sku!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) eid!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) storeId!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) skuId!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) storeName!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) quantityId!: FindOperator<string>;
}

@Exclude()
export class QuantityViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<QuantityView>([
    'quantity',
    'eid',
    'skuId',
    'storeName',
    'storeId',
    'sku',
  ])
  search!: QuantityViewWhereQueryDto;

  @WhereProperty(QuantityViewWhereQueryDto)
  where!: QuantityViewWhereQueryDto;

  @OrderProperty(QuantityViewMetadataInstance.propertyNames())
  order: any;
}
