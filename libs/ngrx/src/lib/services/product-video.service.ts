import { IProductVideoRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_VIDEO_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class ProductVideoService extends CollectionBaseService<IProductVideoRaw> {
  static readonly ENTITY_NAME = 'ProductVideo';
  static readonly ENTITY_PLURAL_NAME = 'ProductVideoes';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('ProductVideo', factory, httpClient, PRODUCT_VIDEO_OPTION_COLUMN);
  }
}
