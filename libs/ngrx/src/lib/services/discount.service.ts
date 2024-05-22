import { IDiscountRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { DISCOUNT_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class DiscountService extends CollectionBaseService<IDiscountRaw> {
  static readonly ENTITY_NAME = 'Discount';
  static readonly ENTITY_PLURAL_NAME = 'Discounts';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Discount', factory, httpClient, DISCOUNT_OPTION_COLUMN);
  }
}
