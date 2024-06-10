import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Store,
  CreateStoreDto,
  UdpateStoreDto,
  StoreQueryDto,
} from '@mdtx/entities';
import { StoreService } from './store.service';

import { ApiVersion } from '@mdtx/common';

export const StoreRRB = RestRouteBuilder.get(Store.name, ApiVersion.v1);

@StoreRRB.Controler()
export class StoreController extends CreateBasicController<
  Store,
  CreateStoreDto,
  UdpateStoreDto,
  StoreQueryDto
>(StoreRRB, Store, CreateStoreDto, UdpateStoreDto, StoreQueryDto) {
  constructor(service: StoreService) {
    super(service);
  }
}
