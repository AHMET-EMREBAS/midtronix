import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Supplier,
  CreateSupplierDto,
  UdpateSupplierDto,
  SupplierQueryDto,
} from '@mdtx/entities';
import { SupplierService } from './supplier.service';

import { ApiVersion } from '@mdtx/common';

export const SupplierRRB = RestRouteBuilder.get(Supplier.name, ApiVersion.v1);

@SupplierRRB.Controler()
export class SupplierController extends CreateBasicController<
  Supplier,
  CreateSupplierDto,
  UdpateSupplierDto,
  SupplierQueryDto
>(
  SupplierRRB,
  Supplier,
  CreateSupplierDto,
  UdpateSupplierDto,
  SupplierQueryDto
) {
  constructor(service: SupplierService) {
    super(service);
  }
}
