import { IDiscount } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class DiscountService extends CollectionBaseService<IDiscount> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Discount', factory);
  }
}
