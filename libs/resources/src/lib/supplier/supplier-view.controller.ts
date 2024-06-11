import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { SupplierQueryDto, SupplierView } from '@mdtx/entities';
import { SupplierViewService } from './supplier-view.service';
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
  constructor(service: SupplierViewService) {
    super(service);
  }
}
