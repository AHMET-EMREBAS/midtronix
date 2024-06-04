import { ISku } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class SkuService extends CollectionBaseService<ISku> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sku', factory);
  }
}
