import { IStoreRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { STORE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class StoreService extends CollectionBaseService<IStoreRaw> {
  static readonly ENTITY_NAME = 'Store';
  static readonly ENTITY_PLURAL_NAME = 'Stores';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Store', factory, httpClient, STORE_OPTION_COLUMN);
  }
}
