import { IManufacturer } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class ManufacturerService extends CollectionBaseService<IManufacturer> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Manufacturer', factory);
  }
}
