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

import { ISerialNumberView } from '@mdtx/models';
import { SerialNumberView } from './serial-number.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';

import { SerialNumberViewMetadataInstance } from './serial-number.meta';

@Exclude()
export class SerialNumberViewWhereQueryDto
  extends BaseWhereQueryDto<SerialNumberView>
  implements
    AllPropertyType<
      Omit<ISerialNumberView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  upc!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  eid!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  productId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  status!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  serialNumber!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  serialNumberId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class SerialNumberViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<SerialNumberView>([
    'name',
    'upc',
    'serialNumber',
    'status',
    'productId',
    'notes',
    'eid',
  ])
  search!: SerialNumberViewWhereQueryDto;

  @WhereProperty(SerialNumberViewWhereQueryDto)
  where!: SerialNumberViewWhereQueryDto;

  @OrderProperty(SerialNumberViewMetadataInstance.propertyNames())
  order: any;
}
