import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { SupplierQueryDto, SupplierView } from '@mdtx/entities';
import { SupplierService } from './supplier.service';
import { ApiVersion } from '@mdtx/common';

export const SupplierViewRRB = RestRouteBuilder.get(
  SupplierView.name,
  ApiVersion.v1
);

@SupplierViewRRB.Controler()
export class SupplierViewController extends CreateBasicViewController<
  SupplierView,
  SupplierQueryDto
>(SupplierViewRRB, SupplierView, SupplierQueryDto) {
  constructor(service: SupplierService) {
    super(service);
  }
}
