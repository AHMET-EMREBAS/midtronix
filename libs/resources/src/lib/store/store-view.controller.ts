import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { StoreQueryDto, StoreView } from '@mdtx/entities';
import { StoreService } from './store.service';
import { ApiVersion } from '@mdtx/common';

export const StoreViewRRB = RestRouteBuilder.get(StoreView.name, ApiVersion.v1);

@StoreViewRRB.Controler()
export class StoreViewController extends CreateBasicViewController<
  StoreView,
  StoreQueryDto
>(StoreViewRRB, StoreView, StoreQueryDto) {
  constructor(service: StoreService) {
    super(service);
  }
}
