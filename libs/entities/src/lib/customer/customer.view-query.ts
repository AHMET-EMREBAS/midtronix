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

import { ICustomerView } from '@mdtx/models';
import { CustomerView } from './customer.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { CustomerMetadataInstance } from './customer.metata';

@Exclude()
export class CustomerViewWhereQueryDto
  extends BaseWhereQueryDto<CustomerView>
  implements
    AllPropertyType<
      Omit<ICustomerView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  customerId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class CustomerViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'customerId'])
  search!: CustomerViewWhereQueryDto;

  @WhereProperty(CustomerViewWhereQueryDto)
  where!: CustomerViewWhereQueryDto;

  @OrderProperty(CustomerMetadataInstance.propertyNames())
  order: any;
}
