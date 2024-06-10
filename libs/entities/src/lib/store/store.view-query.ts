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

import { IStoreView } from '@mdtx/models';
import { StoreView } from './store.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { StoreMetadataInstance } from './store.metata';

@Exclude()
export class StoreViewWhereQueryDto
  extends BaseWhereQueryDto<StoreView>
  implements
    AllPropertyType<Omit<IStoreView, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  storeId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class StoreViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'storeId'])
  search!: StoreViewWhereQueryDto;

  @WhereProperty(StoreViewWhereQueryDto)
  where!: StoreViewWhereQueryDto;

  @OrderProperty(StoreMetadataInstance.propertyNames())
  order: any;
}
