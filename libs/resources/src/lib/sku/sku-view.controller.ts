import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { SkuView, SkuViewQueryDto } from '@mdtx/entities';
import { SkuViewService } from './sku-view.service';
import { ApiVersion } from '@mdtx/common';

export const SkuViewRRB = RestRouteBuilder.get(SkuView.name, ApiVersion.v1);

@SkuViewRRB.Controler()
export class SkuViewController extends CreateBasicViewController<
  SkuView,
  SkuViewQueryDto
>(SkuViewRRB, SkuView, SkuViewQueryDto) {
  constructor(service: SkuViewService) {
    super(service);
  }
}
