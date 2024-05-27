import { ICustomerAccountRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { CUSTOMER_ACCOUNT_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class CustomerAccountService extends CollectionBaseService<ICustomerAccountRaw> {
  static readonly ENTITY_NAME = 'CustomerAccount';
  static readonly ENTITY_PLURAL_NAME = 'CustomerAccounts';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super(
      'CustomerAccount',
      factory,
      httpClient,
      CUSTOMER_ACCOUNT_OPTION_COLUMN
    );
  }
}
