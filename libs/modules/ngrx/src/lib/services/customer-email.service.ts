import { ICustomerEmail } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class CustomerEmailService extends CollectionBaseService<ICustomerEmail> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerEmail', factory);
  }
}
