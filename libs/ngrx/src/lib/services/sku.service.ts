import { ISkuRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { SKU_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class SkuService extends CollectionBaseService<ISkuRaw> {
  static readonly ENTITY_NAME = 'Sku';
  static readonly ENTITY_PLURAL_NAME = 'Skus';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Sku', factory, httpClient, SKU_OPTION_COLUMN);
  }
}
