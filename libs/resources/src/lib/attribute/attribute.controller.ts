import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Attribute,
  CreateAttributeDto,
  UdpateAttributeDto,
  AttributeQueryDto,
} from '@mdtx/entities';
import { AttributeService } from './attribute.service';

import { ApiVersion } from '@mdtx/common';

export const AttributeRRB = RestRouteBuilder.get(Attribute.name, ApiVersion.v1);

@AttributeRRB.Controler()
export class AttributeController extends CreateBasicController<
  Attribute,
  CreateAttributeDto,
  UdpateAttributeDto,
  AttributeQueryDto
>(
  AttributeRRB,
  Attribute,
  CreateAttributeDto,
  UdpateAttributeDto,
  AttributeQueryDto
) {
  constructor(service: AttributeService) {
    super(service);
  }
}
