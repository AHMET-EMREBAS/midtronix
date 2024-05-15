import { IProduct } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class ProductService extends CollectionBaseService<IProduct> {
  static readonly ENTITY_NAME = 'Product';
  static readonly ENTITY_PLURAL_NAME = 'Products';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Product', factory, httpClient, PRODUCT_OPTION_COLUMN);
  }
}
