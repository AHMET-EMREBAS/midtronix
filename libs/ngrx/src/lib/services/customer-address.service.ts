import { ICustomerAddressRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { CUSTOMER_ADDRESS_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class CustomerAddressService extends CollectionBaseService<ICustomerAddressRaw> {
  static readonly ENTITY_NAME = 'CustomerAddress';
  static readonly ENTITY_PLURAL_NAME = 'CustomerAddresses';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super(
      'CustomerAddress',
      factory,
      httpClient,
      CUSTOMER_ADDRESS_OPTION_COLUMN
    );
  }
}
