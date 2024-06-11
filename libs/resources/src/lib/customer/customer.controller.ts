import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Customer,
  CreateCustomerDto,
  UdpateCustomerDto,
  CustomerQueryDto,
} from '@mdtx/entities';
import { CustomerService } from './customer.service';

import { ApiVersion } from '@mdtx/common';

export const CustomerRRB = RestRouteBuilder.get(Customer.name, ApiVersion.v1);

@CustomerRRB.Controler()
export class CustomerController extends CreateBasicController<
  Customer,
  CreateCustomerDto,
  UdpateCustomerDto,
  CustomerQueryDto
>(
  CustomerRRB,
  Customer,
  CreateCustomerDto,
  UdpateCustomerDto,
  CustomerQueryDto
) {
  constructor(service: CustomerService) {
    super(service);
  }
}
