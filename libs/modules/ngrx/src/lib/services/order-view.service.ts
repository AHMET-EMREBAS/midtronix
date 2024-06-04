import { IOrderView } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class OrderViewService extends CollectionBaseService<IOrderView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('OrderView', factory);
  }
}
