import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { HttpClient, IProduct } from '../__externals';
import { CollectionBaseService } from '@mdtx/ngrx';
@Injectable()
export class ProductService extends CollectionBaseService<IProduct> {
  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Product', factory, httpClient);
  }
}
