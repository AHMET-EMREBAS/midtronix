import { Injectable } from '@angular/core';
import { IProduct } from '@mdtx/common';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ProductService extends EntityCollectionServiceBase<
  Partial<IProduct>
> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Product', factory);
  }
}
