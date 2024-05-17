import { IManufacturerRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { MANUFACTURER_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class ManufacturerService extends CollectionBaseService<IManufacturerRaw> {
  static readonly ENTITY_NAME = 'Manufacturer';
  static readonly ENTITY_PLURAL_NAME = 'Manufacturers';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Manufacturer', factory, httpClient, MANUFACTURER_OPTION_COLUMN);
  }
}
