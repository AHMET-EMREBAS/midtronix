import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { QuantityView, QuantityViewQueryDto } from '@mdtx/entities';
import { QuantityViewService } from './quantity-view.service';
import { ApiVersion } from '@mdtx/common';

export const QuantityViewRRB = RestRouteBuilder.get(
  QuantityView.name,
  ApiVersion.v1
);

@QuantityViewRRB.Controler()
export class QuantityViewController extends CreateBasicViewController<
  QuantityView,
  QuantityViewQueryDto
>(QuantityViewRRB, QuantityView, QuantityViewQueryDto) {
  constructor(service: QuantityViewService) {
    super(service);
  }
}
