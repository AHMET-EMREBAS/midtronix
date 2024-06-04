import { IUser } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class UserService extends CollectionBaseService<IUser> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('User', factory);
  }
}
