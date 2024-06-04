import { ISaleView } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class SaleViewService extends CollectionBaseService<ISaleView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('SaleView', factory);
  }
}
