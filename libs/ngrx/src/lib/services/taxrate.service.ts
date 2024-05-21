import { ITaxrateRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { TAXRATE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class TaxrateService extends CollectionBaseService<ITaxrateRaw> {
  static readonly ENTITY_NAME = 'Taxrate';
  static readonly ENTITY_PLURAL_NAME = 'Taxrates';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Taxrate', factory, httpClient, TAXRATE_OPTION_COLUMN);
  }
}
