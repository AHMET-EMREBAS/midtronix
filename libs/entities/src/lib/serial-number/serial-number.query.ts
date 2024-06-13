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
import { SerialNumber } from './serial-number.entity';
import { FindOperator } from 'typeorm';
import { SerialNumberMetadataInstance } from './serial-number.meta';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { ISerialNumber } from '@mdtx/models';

@Exclude()
export class SerialNumberWhereQueryDto
  extends BaseWhereQueryDto<SerialNumber>
  implements
    AllPropertyType<
      Omit<ISerialNumber, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class SerialNumberQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<SerialNumber>(['name'])
  search!: SerialNumberWhereQueryDto;

  @WhereProperty(SerialNumberWhereQueryDto)
  where!: SerialNumberWhereQueryDto;

  @OrderProperty<SerialNumber>(SerialNumberMetadataInstance.propertyNames())
  order: any;
}
