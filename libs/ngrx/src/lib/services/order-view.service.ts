import { IOrderViewRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { ORDER_VIEW_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class OrderViewService extends CollectionBaseService<IOrderViewRaw> {
  static readonly ENTITY_NAME = 'OrderView';
  static readonly ENTITY_PLURAL_NAME = 'OrderViews';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('OrderView', factory, httpClient, ORDER_VIEW_OPTION_COLUMN);
  }
}
