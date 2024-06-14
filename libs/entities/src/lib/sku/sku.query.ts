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
import { Sku } from './sku.entity';
import { FindOperator } from 'typeorm';
import { SkuMetadataInstance } from './sku.meta';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { ISku } from '@mdtx/models';

@Exclude()
export class SkuWhereQueryDto
  extends BaseWhereQueryDto<Sku>
  implements
    AllPropertyType<Omit<ISku, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' }) description!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) sku!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;

  @Exclude() product!: FindOperator<string>;
  @Exclude() attributes!: FindOperator<string>;
}

@Exclude()
export class SkuQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Sku>(['name'])
  search!: SkuWhereQueryDto;

  @WhereProperty(SkuWhereQueryDto)
  where!: SkuWhereQueryDto;

  @OrderProperty<Sku>(SkuMetadataInstance.propertyNames())
  order: any;
}
