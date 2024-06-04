import { IStore } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class StoreService extends CollectionBaseService<IStore> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Store', factory);
  }
}
