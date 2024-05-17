import { ICustomerRoleRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { CUSTOMER_ROLE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class CustomerRoleService extends CollectionBaseService<ICustomerRoleRaw> {
  static readonly ENTITY_NAME = 'CustomerRole';
  static readonly ENTITY_PLURAL_NAME = 'CustomerRoles';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('CustomerRole', factory, httpClient, CUSTOMER_ROLE_OPTION_COLUMN);
  }
}
