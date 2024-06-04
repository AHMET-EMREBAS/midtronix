import { ICategory } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class CategoryService extends CollectionBaseService<ICategory> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Category', factory);
  }
}
