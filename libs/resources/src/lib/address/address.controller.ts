import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Address,
  CreateAddressDto,
  UdpateAddressDto,
  AddressQueryDto,
} from '@mdtx/entities';
import { AddressService } from './address.service';

import { ApiVersion } from '@mdtx/common';

export const AddressRRB = RestRouteBuilder.get(Address.name, ApiVersion.v1);

@AddressRRB.Controler()
export class AddressController extends CreateBasicController<
  Address,
  CreateAddressDto,
  UdpateAddressDto,
  AddressQueryDto
>(AddressRRB, Address, CreateAddressDto, UdpateAddressDto, AddressQueryDto) {
  constructor(service: AddressService) {
    super(service);
  }
}



