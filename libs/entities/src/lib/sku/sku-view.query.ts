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
  skuId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class SkuViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<SkuView>(['name', 'eid'])
  search!: SkuViewWhereQueryDto;

  @WhereProperty(SkuViewWhereQueryDto)
  where!: SkuViewWhereQueryDto;

  @OrderProperty(SkuViewMetadataInstance.propertyNames())
  order: any;
}
