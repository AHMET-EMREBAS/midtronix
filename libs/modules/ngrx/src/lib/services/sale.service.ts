import { ISale } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class SaleService extends CollectionBaseService<ISale> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sale', factory);
  }
}
