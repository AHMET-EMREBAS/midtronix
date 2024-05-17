import { ICustomerPermissionRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { CUSTOMER_PERMISSION_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class CustomerPermissionService extends CollectionBaseService<ICustomerPermissionRaw> {
  static readonly ENTITY_NAME = 'CustomerPermission';
  static readonly ENTITY_PLURAL_NAME = 'CustomerPermissions';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super(
      'CustomerPermission',
      factory,
      httpClient,
      CUSTOMER_PERMISSION_OPTION_COLUMN
    );
  }
}
