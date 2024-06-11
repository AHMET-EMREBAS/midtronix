import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Phone,
  CreatePhoneDto,
  UdpatePhoneDto,
  PhoneQueryDto,
} from '@mdtx/entities';
import { PhoneService } from './phone.service';

import { ApiVersion } from '@mdtx/common';

export const PhoneRRB = RestRouteBuilder.get(Phone.name, ApiVersion.v1);

@PhoneRRB.Controler()
export class PhoneController extends CreateBasicController<
  Phone,
  CreatePhoneDto,
  UdpatePhoneDto,
  PhoneQueryDto
>(PhoneRRB, Phone, CreatePhoneDto, UdpatePhoneDto, PhoneQueryDto) {
  constructor(service: PhoneService) {
    super(service);
  }
}
