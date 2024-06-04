import { IUserPhone } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class UserPhoneService extends CollectionBaseService<IUserPhone> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('UserPhone', factory);
  }
}
