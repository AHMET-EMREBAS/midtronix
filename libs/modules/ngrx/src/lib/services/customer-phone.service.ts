import { ICustomerPhone } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class CustomerPhoneService extends CollectionBaseService<ICustomerPhone> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerPhone', factory);
  }
}
