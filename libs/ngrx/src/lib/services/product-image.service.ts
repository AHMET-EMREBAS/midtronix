import { IProductImageRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_IMAGE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class ProductImageService extends CollectionBaseService<IProductImageRaw> {
  static readonly ENTITY_NAME = 'ProductImage';
  static readonly ENTITY_PLURAL_NAME = 'ProductImages';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('ProductImage', factory, httpClient, PRODUCT_IMAGE_OPTION_COLUMN);
  }
}
