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

import { IAttributeView } from '@mdtx/models';
import { AttributeView } from './attribute.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';

import { AttributeViewMetadataInstance } from './attribute.meta';

@Exclude()
export class AttributeViewWhereQueryDto
  extends BaseWhereQueryDto<AttributeView>
  implements
    AllPropertyType<
      Omit<IAttributeView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' }) sku!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) skuId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) skuName!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) key!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) value!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) eid!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) name!: FindOperator<string>;
}

@Exclude()
export class AttributeViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<AttributeView>([
    'key',
    'value',
    'eid',
    'sku',
    'skuId',
    'skuName',
  ])
  search!: AttributeViewWhereQueryDto;

  @WhereProperty(AttributeViewWhereQueryDto)
  where!: AttributeViewWhereQueryDto;

  @OrderProperty(AttributeViewMetadataInstance.propertyNames())
  order: any;
}
