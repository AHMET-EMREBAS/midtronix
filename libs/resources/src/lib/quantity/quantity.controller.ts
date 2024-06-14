import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Quantity,
  CreateQuantityDto,
  UdpateQuantityDto,
  QuantityQueryDto,
} from '@mdtx/entities';
import { QuantityService } from './quantity.service';

import { ApiVersion } from '@mdtx/common';

export const QuantityRRB = RestRouteBuilder.get(Quantity.name, ApiVersion.v1);

@QuantityRRB.Controler()
export class QuantityController extends CreateBasicController<
  Quantity,
  CreateQuantityDto,
  UdpateQuantityDto,
  QuantityQueryDto
>(
  QuantityRRB,
  Quantity,
  CreateQuantityDto,
  UdpateQuantityDto,
  QuantityQueryDto
) {
  constructor(service: QuantityService) {
    super(service);
  }
}
