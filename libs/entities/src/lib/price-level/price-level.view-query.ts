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

import { IPriceLevelView } from '@mdtx/models';
import { PriceLevelView } from './price-level.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { PriceLevelMetadataInstance } from './price-level.metata';

@Exclude()
export class PriceLevelViewWhereQueryDto
  extends BaseWhereQueryDto<PriceLevelView>
  implements
    AllPropertyType<
      Omit<IPriceLevelView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  priceLevelId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class PriceLevelViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'priceLevelId'])
  search!: PriceLevelViewWhereQueryDto;

  @WhereProperty(PriceLevelViewWhereQueryDto)
  where!: PriceLevelViewWhereQueryDto;

  @OrderProperty(PriceLevelMetadataInstance.propertyNames())
  order: any;
}
