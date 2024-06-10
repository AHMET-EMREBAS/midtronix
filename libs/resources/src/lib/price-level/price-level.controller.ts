import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  CreatePriceLevelDto,
  PriceLevelQueryDto,
  PriceLevel,
  UdpatePriceLevelDto,
} from '@mdtx/entities';
import { PriceLevelService } from './price-level.service';

import { ApiVersion } from '@mdtx/common';

export const PriceLevelRRB = RestRouteBuilder.get(
  PriceLevel.name,
  ApiVersion.v1
);

@PriceLevelRRB.Controler()
export class PriceLevelController extends CreateBasicController<
  PriceLevel,
  CreatePriceLevelDto,
  UdpatePriceLevelDto,
  PriceLevelQueryDto
>(
  PriceLevelRRB,
  PriceLevel,
  CreatePriceLevelDto,
  UdpatePriceLevelDto,
  PriceLevelQueryDto
) {
  constructor(service: PriceLevelService) {
    super(service);
  }
}
