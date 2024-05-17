import { IQuantityRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { QUANTITY_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class QuantityService extends CollectionBaseService<IQuantityRaw> {
  static readonly ENTITY_NAME = 'Quantity';
  static readonly ENTITY_PLURAL_NAME = 'Quantities';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Quantity', factory, httpClient, QUANTITY_OPTION_COLUMN);
  }
}
