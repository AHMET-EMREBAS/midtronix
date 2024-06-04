import { ICustomerAddress } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class CustomerAddressService extends CollectionBaseService<ICustomerAddress> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerAddress', factory);
  }
}
