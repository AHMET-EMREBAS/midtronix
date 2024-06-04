import { ISkuView } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class SkuViewService extends CollectionBaseService<ISkuView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('SkuView', factory);
  }
}
