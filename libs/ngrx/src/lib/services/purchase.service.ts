import { IPurchaseRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { PURCHASE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class PurchaseService extends CollectionBaseService<IPurchaseRaw> {
  static readonly ENTITY_NAME = 'Purchase';
  static readonly ENTITY_PLURAL_NAME = 'Purchases';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Purchase', factory, httpClient, PURCHASE_OPTION_COLUMN);
  }
}
