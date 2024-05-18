import { ISkuViewRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { SKU_VIEW_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class SkuViewService extends CollectionBaseService<ISkuViewRaw> {
  static readonly ENTITY_NAME = 'SkuView';
  static readonly ENTITY_PLURAL_NAME = 'SkuViews';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('SkuView', factory, httpClient, SKU_VIEW_OPTION_COLUMN);
  }
}
