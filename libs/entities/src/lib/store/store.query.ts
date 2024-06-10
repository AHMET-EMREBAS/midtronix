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
import { Store } from './store.entity';
import { FindOperator } from 'typeorm';

import { StoreMetadataInstance } from './store.metata';

@Exclude()
export class StoreWhereQueryDto extends BaseWhereQueryDto<Store> {
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class StoreQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Store>(['name'])
  search!: StoreWhereQueryDto;

  @WhereProperty(StoreWhereQueryDto)
  where!: StoreWhereQueryDto;

  @OrderProperty<Store>(StoreMetadataInstance.propertyNames())
  order: any;
}
