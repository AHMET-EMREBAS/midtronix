import { IPriceLevel } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class PriceLevelService extends CollectionBaseService<IPriceLevel> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PriceLevel', factory);
  }
}
