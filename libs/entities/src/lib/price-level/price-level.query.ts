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
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IPriceLevel } from '@mdtx/models';

@Exclude()
export class PriceLevelWhereQueryDto
  extends BaseWhereQueryDto<PriceLevel>
  implements
    AllPropertyType<Omit<IPriceLevel, keyof IBaseEntity>, FindOperator<string>>
{
  id?: any;
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  description!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'number' })
  taxrate!: FindOperator<string>;
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
