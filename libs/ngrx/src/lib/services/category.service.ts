import { ICategory } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { CATEGORY_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class CategoryService extends CollectionBaseService<ICategory> {
  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Category', factory, httpClient, CATEGORY_OPTION_COLUMN);
  }
}
