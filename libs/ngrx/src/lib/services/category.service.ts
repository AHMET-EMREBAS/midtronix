import { ICategory } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { CATEGORY_OPTION_COLUMN } from '../option-columns';

@Injectable({
  providedIn: 'root',
  useExisting: true,
})
export class CategoryService extends CollectionBaseService<ICategory> {
  static readonly ENTITY_NAME = 'Category';
  static readonly ENTITY_PLURAL_NAME = 'Categories';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Category', factory, httpClient, CATEGORY_OPTION_COLUMN);
  }
}
