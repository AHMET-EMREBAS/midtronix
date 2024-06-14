import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Price,
  CreatePriceDto,
  UdpatePriceDto,
  PriceQueryDto,
} from '@mdtx/entities';
import { PriceService } from './price.service';

import { ApiVersion } from '@mdtx/common';

export const PriceRRB = RestRouteBuilder.get(Price.name, ApiVersion.v1);

@PriceRRB.Controler()
export class PriceController extends CreateBasicController<
  Price,
  CreatePriceDto,
  UdpatePriceDto,
  PriceQueryDto
>(PriceRRB, Price, CreatePriceDto, UdpatePriceDto, PriceQueryDto) {
  constructor(service: PriceService) {
    super(service);
  }
}
