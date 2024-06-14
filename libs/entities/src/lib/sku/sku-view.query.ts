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

import { ISkuView } from '@mdtx/models';
import { SkuView } from './sku.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';

import { SkuViewMetadataInstance } from './sku.meta';

@Exclude()
export class SkuViewWhereQueryDto
  extends BaseWhereQueryDto<SkuView>
  implements
    AllPropertyType<Omit<ISkuView, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  serialNumberRequired!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  description!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  attributes!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  sku!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  eid!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  productId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  productName!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  productUpc!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  skuId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class SkuViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<SkuView>([
    'name',
    'description',
    'notes',
    'eid',
    'sku',
    'productId',
    'productName',
    'productUpc',
  ])
  search!: SkuViewWhereQueryDto;

  @WhereProperty(SkuViewWhereQueryDto)
  where!: SkuViewWhereQueryDto;

  @OrderProperty(SkuViewMetadataInstance.propertyNames())
  order: any;
}
