import { ISprint } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class SprintService extends CollectionBaseService<ISprint> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sprint', factory);
  }
}
