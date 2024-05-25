import { IDiscountViewRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { DISCOUNT_VIEW_OPTION_COLUMN } from '../option-columns';
import { IInputOption } from '@mdtx/material/core';
import { Observable } from 'rxjs';

@Injectable()
export class DiscountViewService extends CollectionBaseService<IDiscountViewRaw> {
  static readonly ENTITY_NAME = 'DiscountView';
  static readonly ENTITY_PLURAL_NAME = 'DiscountViews';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('DiscountView', factory, httpClient, DISCOUNT_VIEW_OPTION_COLUMN);
  }

  findBySkuId(skuId: number): Observable<IInputOption[]> {
    return super.queryBy('skuId', skuId + '');
  }
}
