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
import { Quantity } from './quantity.entity';
import { FindOperator } from 'typeorm';
import { QuantityMetadataInstance } from './quantity.meta';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IQuantity } from '@mdtx/models';

@Exclude()
export class QuantityWhereQueryDto
  extends BaseWhereQueryDto<Quantity>
  implements
    AllPropertyType<Omit<IQuantity, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' }) quantity!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) sku!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) store!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class QuantityQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Quantity>(['quantity'])
  search!: QuantityWhereQueryDto;

  @WhereProperty(QuantityWhereQueryDto)
  where!: QuantityWhereQueryDto;

  @OrderProperty<Quantity>(QuantityMetadataInstance.propertyNames())
  order: any;
}
