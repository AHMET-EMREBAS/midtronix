import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { PriceLevelQueryDto, PriceLevelView } from '@mdtx/entities';
import { PriceLevelViewService } from './price-level-view.service';
import { ApiVersion } from '@mdtx/common';

export const PriceLevelViewRRB = RestRouteBuilder.get(
  PriceLevelView.name,
  ApiVersion.v1
);

@PriceLevelViewRRB.Controler()
export class PriceLevelViewController extends CreateBasicViewController<
  PriceLevelView,
  PriceLevelQueryDto
>(PriceLevelViewRRB, PriceLevelView, PriceLevelQueryDto) {
  constructor(service: PriceLevelViewService) {
    super(service);
  }
}
