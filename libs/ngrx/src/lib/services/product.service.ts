import { IProduct } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService extends CollectionBaseService<IProduct> {
  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Product', factory, httpClient);
  }
}
