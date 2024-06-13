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
import { CategoryMetadataInstance } from './category.meta';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { ICategory } from '@mdtx/models';

@Exclude()
export class CategoryWhereQueryDto
  extends BaseWhereQueryDto<Category>
  implements
    AllPropertyType<Omit<ICategory, keyof IBaseEntity>, FindOperator<string>>
{
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
