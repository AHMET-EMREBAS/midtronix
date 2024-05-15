import { IUserAddress } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { USER_ADDRESS_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class UserAddressService extends CollectionBaseService<IUserAddress> {
  static readonly ENTITY_NAME = 'UserAddress';
  static readonly ENTITY_PLURAL_NAME = 'UserAddresss';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('UserAddress', factory, httpClient, USER_ADDRESS_OPTION_COLUMN);
  }
}
