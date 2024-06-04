import { IProduct } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class ProductService extends CollectionBaseService<IProduct> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Product', factory);
  }
}
