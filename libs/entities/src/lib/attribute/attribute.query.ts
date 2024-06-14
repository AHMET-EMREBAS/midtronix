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
import { Attribute } from './attribute.entity';
import { FindOperator } from 'typeorm';
import { AttributeMetadataInstance } from './attribute.meta';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IAttribute } from '@mdtx/models';

@Exclude()
export class AttributeWhereQueryDto
  extends BaseWhereQueryDto<Attribute>
  implements
    AllPropertyType<Omit<IAttribute, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' }) sku!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) key!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) value!: FindOperator<string>;
}

@Exclude()
export class AttributeQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Attribute>(['key', 'value'])
  search!: AttributeWhereQueryDto;

  @WhereProperty(AttributeWhereQueryDto)
  where!: AttributeWhereQueryDto;

  @OrderProperty<Attribute>(AttributeMetadataInstance.propertyNames())
  order: any;
}
