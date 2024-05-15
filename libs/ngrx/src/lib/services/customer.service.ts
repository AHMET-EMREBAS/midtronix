import { ICustomer } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { CUSTOMER_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class CustomerService extends CollectionBaseService<ICustomer> {
  static readonly ENTITY_NAME = 'Customer';
  static readonly ENTITY_PLURAL_NAME = 'Customers';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Customer', factory, httpClient, CUSTOMER_OPTION_COLUMN);
  }
}
