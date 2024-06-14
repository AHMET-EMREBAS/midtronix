import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { PriceView, PriceViewQueryDto } from '@mdtx/entities';
import { PriceViewService } from './price-view.service';
import { ApiVersion } from '@mdtx/common';

export const PriceViewRRB = RestRouteBuilder.get(PriceView.name, ApiVersion.v1);

@PriceViewRRB.Controler()
export class PriceViewController extends CreateBasicViewController<
  PriceView,
  PriceViewQueryDto
>(PriceViewRRB, PriceView, PriceViewQueryDto) {
  constructor(service: PriceViewService) {
    super(service);
  }
}
