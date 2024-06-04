import { ICustomerView } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class CustomerViewService extends CollectionBaseService<ICustomerView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerView', factory);
  }
}
