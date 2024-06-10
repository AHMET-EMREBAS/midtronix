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
import { PriceLevel } from './price-level.entity';
import { FindOperator } from 'typeorm';

import { PriceLevelMetadataInstance } from './price-level.metata';

@Exclude()
export class PriceLevelWhereQueryDto extends BaseWhereQueryDto<PriceLevel> {
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class PriceLevelQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<PriceLevel>(['name'])
  search!: PriceLevelWhereQueryDto;

  @WhereProperty(PriceLevelWhereQueryDto)
  where!: PriceLevelWhereQueryDto;

  @OrderProperty<PriceLevel>(PriceLevelMetadataInstance.propertyNames())
  order: any;
}
