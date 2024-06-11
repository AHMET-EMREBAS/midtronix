import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { PhoneQueryDto, PhoneView } from '@mdtx/entities';
import { PhoneService } from './phone.service';
import { ApiVersion } from '@mdtx/common';

export const PhoneViewRRB = RestRouteBuilder.get(PhoneView.name, ApiVersion.v1);

@PhoneViewRRB.Controler()
export class PhoneViewController extends CreateBasicViewController<
  PhoneView,
  PhoneQueryDto
>(PhoneViewRRB, PhoneView, PhoneQueryDto) {
  constructor(service: PhoneService) {
    super(service);
  }
}
