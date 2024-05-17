import { ICustomerPhoneRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { CUSTOMER_PHONE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class CustomerPhoneService extends CollectionBaseService<ICustomerPhoneRaw> {
  static readonly ENTITY_NAME = 'CustomerPhone';
  static readonly ENTITY_PLURAL_NAME = 'CustomerPhones';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('CustomerPhone', factory, httpClient, CUSTOMER_PHONE_OPTION_COLUMN);
  }
}
