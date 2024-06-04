import { IOrder } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class OrderService extends CollectionBaseService<IOrder> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Order', factory);
  }
}
