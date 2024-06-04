import { IProductView } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class ProductViewService extends CollectionBaseService<IProductView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('ProductView', factory);
  }
}
