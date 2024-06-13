import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { SerialNumberView, SerialNumberViewQueryDto } from '@mdtx/entities';
import { SerialNumberViewService } from './serial-number-view.service';
import { ApiVersion } from '@mdtx/common';

export const SerialNumberViewRRB = RestRouteBuilder.get(
  SerialNumberView.name,
  ApiVersion.v1
);

@SerialNumberViewRRB.Controler()
export class SerialNumberViewController extends CreateBasicViewController<
  SerialNumberView,
  SerialNumberViewQueryDto
>(SerialNumberViewRRB, SerialNumberView, SerialNumberViewQueryDto) {
  constructor(service: SerialNumberViewService) {
    super(service);
  }
}
