import { ICustomer } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class CustomerService extends CollectionBaseService<ICustomer> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Customer', factory);
  }
}
