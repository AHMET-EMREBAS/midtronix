import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { AddressQueryDto, AddressView } from '@mdtx/entities';
import { AddressViewService } from './address-view.service';
import { ApiVersion } from '@mdtx/common';

export const AddressViewRRB = RestRouteBuilder.get(
  AddressView.name,
  ApiVersion.v1
);

@AddressViewRRB.Controler()
export class AddressViewController extends CreateBasicViewController<
  AddressView,
  AddressQueryDto
>(AddressViewRRB, AddressView, AddressQueryDto) {
  constructor(service: AddressViewService) {
    super(service);
  }
}
