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
import { Phone } from './phone.entity';
import { FindOperator } from 'typeorm';
import { PhoneMetadataInstance } from './phone.metata';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IPhone } from '@mdtx/models';

@Exclude()
export class PhoneWhereQueryDto
  extends BaseWhereQueryDto<Phone>
  implements
    AllPropertyType<Omit<IPhone, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class PhoneQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Phone>(['name'])
  search!: PhoneWhereQueryDto;

  @WhereProperty(PhoneWhereQueryDto)
  where!: PhoneWhereQueryDto;

  @OrderProperty<Phone>(PhoneMetadataInstance.propertyNames())
  order: any;
}
