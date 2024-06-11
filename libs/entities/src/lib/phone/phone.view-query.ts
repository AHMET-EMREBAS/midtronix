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

import { IPhoneView } from '@mdtx/models';
import { PhoneView } from './phone.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { PhoneMetadataInstance } from './phone.metata';

@Exclude()
export class PhoneViewWhereQueryDto
  extends BaseWhereQueryDto<PhoneView>
  implements
    AllPropertyType<Omit<IPhoneView, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  phoneId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class PhoneViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'phoneId'])
  search!: PhoneViewWhereQueryDto;

  @WhereProperty(PhoneViewWhereQueryDto)
  where!: PhoneViewWhereQueryDto;

  @OrderProperty(PhoneMetadataInstance.propertyNames())
  order: any;
}
