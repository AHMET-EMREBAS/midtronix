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
import { Manufacturer } from './manufacturer.entity';
import { FindOperator } from 'typeorm';
import { ManufacturerMetadataInstance } from './manufacturer.metata';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IManufacturer } from '@mdtx/models';

@Exclude()
export class ManufacturerWhereQueryDto
  extends BaseWhereQueryDto<Manufacturer>
  implements
    AllPropertyType<
      Omit<IManufacturer, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  description!: FindOperator<string>;
}

@Exclude()
export class ManufacturerQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Manufacturer>(['name'])
  search!: ManufacturerWhereQueryDto;

  @WhereProperty(ManufacturerWhereQueryDto)
  where!: ManufacturerWhereQueryDto;

  @OrderProperty<Manufacturer>(ManufacturerMetadataInstance.propertyNames())
  order: any;
}
