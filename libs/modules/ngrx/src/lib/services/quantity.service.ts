import { IQuantity } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class QuantityService extends CollectionBaseService<IQuantity> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Quantity', factory);
  }
}
