import { ICreateSaleDto, ISaleRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { SALE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class SaleService extends CollectionBaseService<ISaleRaw> {
  static readonly ENTITY_NAME = 'Sale';
  static readonly ENTITY_PLURAL_NAME = 'Sales';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Sale', factory, httpClient, SALE_OPTION_COLUMN);
  }

  addSale(sale: ICreateSaleDto) {
    return super.add(sale);
  }
}
