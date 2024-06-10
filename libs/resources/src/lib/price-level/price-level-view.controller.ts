import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { PriceLevelQueryDto, PriceLevelView } from '@mdtx/entities';
import { PriceLevelService } from './price-level.service';
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
  constructor(service: PriceLevelService) {
    super(service);
  }
}
