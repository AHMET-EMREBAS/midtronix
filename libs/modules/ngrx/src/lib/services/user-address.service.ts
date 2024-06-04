import { IUserAddress } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class UserAddressService extends CollectionBaseService<IUserAddress> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('UserAddress', factory);
  }
}
