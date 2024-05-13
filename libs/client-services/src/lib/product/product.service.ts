import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { BaseNgrxService } from '../__base';
import { HttpClient, IProduct } from '../__externals';

@Injectable()
export class ProductService extends BaseNgrxService<IProduct> {
  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Product', factory, httpClient);
  }
}
