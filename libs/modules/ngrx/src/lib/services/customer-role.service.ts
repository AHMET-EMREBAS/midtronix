import { ICustomerRole } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class CustomerRoleService extends CollectionBaseService<ICustomerRole> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerRole', factory);
  }
}
