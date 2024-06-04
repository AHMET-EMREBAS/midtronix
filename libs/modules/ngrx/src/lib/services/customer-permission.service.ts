import { ICustomerPermission } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class CustomerPermissionService extends CollectionBaseService<ICustomerPermission> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerPermission', factory);
  }
}
