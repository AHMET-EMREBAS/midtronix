import { ICart } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class CartService extends CollectionBaseService<ICart> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Cart', factory);
  }
}
