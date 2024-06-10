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

import { IManufacturerView } from '@mdtx/models';
import { ManufacturerView } from './manufacturer.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { ManufacturerMetadataInstance } from './manufacturer.metata';

@Exclude()
export class ManufacturerViewWhereQueryDto
  extends BaseWhereQueryDto<ManufacturerView>
  implements
    AllPropertyType<
      Omit<IManufacturerView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' }) description!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' })
  manufacturerId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class ManufacturerViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'manufacturerId'])
  search!: ManufacturerViewWhereQueryDto;

  @WhereProperty(ManufacturerViewWhereQueryDto)
  where!: ManufacturerViewWhereQueryDto;

  @OrderProperty(ManufacturerMetadataInstance.propertyNames())
  order: any;
}
