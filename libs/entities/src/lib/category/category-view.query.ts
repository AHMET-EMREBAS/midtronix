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

import { ICategoryView } from '@mdtx/models';
import { CategoryView } from './category.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';

import { CategoryViewMetadataInstance } from './category.meta';

@Exclude()
export class CategoryViewWhereQueryDto
  extends BaseWhereQueryDto<CategoryView>
  implements
    AllPropertyType<
      Omit<ICategoryView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  categoryId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class CategoryViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<CategoryView>(['name', 'categoryId'])
  search!: CategoryViewWhereQueryDto;

  @WhereProperty(CategoryViewWhereQueryDto)
  where!: CategoryViewWhereQueryDto;

  @OrderProperty(CategoryViewMetadataInstance.propertyNames())
  order: any;
}
