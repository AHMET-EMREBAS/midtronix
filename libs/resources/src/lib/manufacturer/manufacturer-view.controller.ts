import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { ManufacturerQueryDto, ManufacturerView } from '@mdtx/entities';
import { ManufacturerViewService } from './manufacturer-view.service';
import { ApiVersion } from '@mdtx/common';

export const ManufacturerViewRRB = RestRouteBuilder.get(
  ManufacturerView.name,
  ApiVersion.v1
);

@ManufacturerViewRRB.Controler()
export class ManufacturerViewController extends CreateBasicViewController<
  ManufacturerView,
  ManufacturerQueryDto
>(ManufacturerViewRRB, ManufacturerView, ManufacturerQueryDto) {
  constructor(service: ManufacturerViewService) {
    super(service);
  }
}
