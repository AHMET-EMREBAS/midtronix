import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { ManufacturerQueryDto, ManufacturerView } from '@mdtx/entities';
import { ManufacturerService } from './manufacturer.service';
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
  constructor(service: ManufacturerService) {
    super(service);
  }
}
