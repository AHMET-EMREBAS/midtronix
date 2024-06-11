import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { CustomerQueryDto, CustomerView } from '@mdtx/entities';
import { CustomerService } from './customer.service';
import { ApiVersion } from '@mdtx/common';

export const CustomerViewRRB = RestRouteBuilder.get(
  CustomerView.name,
  ApiVersion.v1
);

@CustomerViewRRB.Controler()
export class CustomerViewController extends CreateBasicViewController<
  CustomerView,
  CustomerQueryDto
>(CustomerViewRRB, CustomerView, CustomerQueryDto) {
  constructor(service: CustomerService) {
    super(service);
  }
}
