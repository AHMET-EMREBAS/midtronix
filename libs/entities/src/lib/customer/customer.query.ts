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
import { Customer } from './customer.entity';
import { FindOperator } from 'typeorm';
import { CustomerMetadataInstance } from './customer.metata';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { ICustomer } from '@mdtx/models';

@Exclude()
export class CustomerWhereQueryDto
  extends BaseWhereQueryDto<Customer>
  implements
    AllPropertyType<Omit<ICustomer, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class CustomerQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Customer>(['name'])
  search!: CustomerWhereQueryDto;

  @WhereProperty(CustomerWhereQueryDto)
  where!: CustomerWhereQueryDto;

  @OrderProperty<Customer>(CustomerMetadataInstance.propertyNames())
  order: any;
}
