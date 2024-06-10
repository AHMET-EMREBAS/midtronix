import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Manufacturer,
  CreateManufacturerDto,
  UdpateManufacturerDto,
  ManufacturerQueryDto,
} from '@mdtx/entities';
import { ManufacturerService } from './manufacturer.service';

import { ApiVersion } from '@mdtx/common';

export const ManufacturerRRB = RestRouteBuilder.get(
  Manufacturer.name,
  ApiVersion.v1
);

@ManufacturerRRB.Controler()
export class ManufacturerController extends CreateBasicController<
  Manufacturer,
  CreateManufacturerDto,
  UdpateManufacturerDto,
  ManufacturerQueryDto
>(
  ManufacturerRRB,
  Manufacturer,
  CreateManufacturerDto,
  UdpateManufacturerDto,
  ManufacturerQueryDto
) {
  constructor(service: ManufacturerService) {
    super(service);
  }
}
