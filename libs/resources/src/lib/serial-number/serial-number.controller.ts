import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  SerialNumber,
  CreateSerialNumberDto,
  UdpateSerialNumberDto,
  SerialNumberQueryDto,
} from '@mdtx/entities';
import { SerialNumberService } from './serial-number.service';

import { ApiVersion } from '@mdtx/common';

export const SerialNumberRRB = RestRouteBuilder.get(
  SerialNumber.name,
  ApiVersion.v1
);

@SerialNumberRRB.Controler()
export class SerialNumberController extends CreateBasicController<
  SerialNumber,
  CreateSerialNumberDto,
  UdpateSerialNumberDto,
  SerialNumberQueryDto
>(
  SerialNumberRRB,
  SerialNumber,
  CreateSerialNumberDto,
  UdpateSerialNumberDto,
  SerialNumberQueryDto
) {
  constructor(service: SerialNumberService) {
    super(service);
  }
}
