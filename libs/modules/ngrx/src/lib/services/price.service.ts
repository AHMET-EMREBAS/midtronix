import { IPrice } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class PriceService extends CollectionBaseService<IPrice> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Price', factory);
  }
}
