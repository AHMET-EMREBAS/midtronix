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

import { IAddressView } from '@mdtx/models';
import { AddressView } from './address.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { AddressViewMetadataInstance } from './address.metata';

@Exclude()
export class AddressViewWhereQueryDto
  extends BaseWhereQueryDto<AddressView>
  implements
    AllPropertyType<
      Omit<IAddressView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' }) userId!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) street!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) city!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) state!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) country!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) zip!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  addressId!: FindOperator<string>;
}

@Exclude()
export class AddressViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'addressId'])
  search!: AddressViewWhereQueryDto;

  @WhereProperty(AddressViewWhereQueryDto)
  where!: AddressViewWhereQueryDto;

  @OrderProperty(AddressViewMetadataInstance.propertyNames())
  order: any;
}
