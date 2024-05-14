import { ICustomerAddress } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerAddressService extends CollectionBaseService<ICustomerAddress> {
  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('CustomerAddress', factory, httpClient);
  }
}
