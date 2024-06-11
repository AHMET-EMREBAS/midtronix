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
import { Address } from './address.entity';
import { FindOperator } from 'typeorm';
import { AddressMetadataInstance } from './address.metata';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IAddress } from '@mdtx/models';

@Exclude()
export class AddressWhereQueryDto
  extends BaseWhereQueryDto<Address>
  implements
    AllPropertyType<Omit<IAddress, keyof IBaseEntity>, FindOperator<string>>
{
  @Exclude() user!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) street!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) city!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) state!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) country!: FindOperator<string>;
  @QueryOperatorProperty({ type: 'string' }) zip!: FindOperator<string>;
}

@Exclude()
export class AddressQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Address>(['street', 'city', 'state', 'country', 'zip'])
  search!: AddressWhereQueryDto;

  @WhereProperty(AddressWhereQueryDto)
  where!: AddressWhereQueryDto;

  @OrderProperty<Address>(AddressMetadataInstance.propertyNames())
  order: any;
}
