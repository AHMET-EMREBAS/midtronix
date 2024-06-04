import { IUserEmail } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class UserEmailService extends CollectionBaseService<IUserEmail> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('UserEmail', factory);
  }
}
