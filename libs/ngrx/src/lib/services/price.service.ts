import { IPriceRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { PRICE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class PriceService extends CollectionBaseService<IPriceRaw> {
  static readonly ENTITY_NAME = 'Price';
  static readonly ENTITY_PLURAL_NAME = 'Prices';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Price', factory, httpClient, PRICE_OPTION_COLUMN);
  }
}
