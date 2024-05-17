import { IPriceLevelRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { PRICE_LEVEL_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class PriceLevelService extends CollectionBaseService<IPriceLevelRaw> {
  static readonly ENTITY_NAME = 'PriceLevel';
  static readonly ENTITY_PLURAL_NAME = 'PriceLevels';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('PriceLevel', factory, httpClient, PRICE_LEVEL_OPTION_COLUMN);
  }
}
