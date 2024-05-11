/* eslint-disable @nx/enforce-module-boundaries */

import { Injectable } from '@angular/core';
import { ICategory } from '@mdtx/common';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class CategoryService extends EntityCollectionServiceBase<ICategory> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Category', factory);
  }
}



