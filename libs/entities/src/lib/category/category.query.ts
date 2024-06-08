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
import { Category } from './category.entity';
import { FindOperator } from 'typeorm';

import { CategoryMetadataInstance } from './category.metata';

@Exclude()
export class CategoryWhereQueryDto extends BaseWhereQueryDto<Category> {
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class CategoryQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Category>(['name'])
  search!: CategoryWhereQueryDto;

  @WhereProperty(CategoryWhereQueryDto)
  where!: CategoryWhereQueryDto;

  @OrderProperty<Category>(CategoryMetadataInstance.propertyNames())
  order: any;
}
