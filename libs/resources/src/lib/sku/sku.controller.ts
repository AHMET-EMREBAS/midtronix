import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import { Sku, CreateSkuDto, UdpateSkuDto, SkuQueryDto } from '@mdtx/entities';
import { SkuService } from './sku.service';

import { ApiVersion } from '@mdtx/common';

export const SkuRRB = RestRouteBuilder.get(Sku.name, ApiVersion.v1);

@SkuRRB.Controler()
export class SkuController extends CreateBasicController<
  Sku,
  CreateSkuDto,
  UdpateSkuDto,
  SkuQueryDto
>(SkuRRB, Sku, CreateSkuDto, UdpateSkuDto, SkuQueryDto) {
  constructor(service: SkuService) {
    super(service);
  }
}
