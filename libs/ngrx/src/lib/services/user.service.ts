import { IUser } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { USER_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class UserService extends CollectionBaseService<IUser> {
  static readonly ENTITY_NAME = 'User';
  static readonly ENTITY_PLURAL_NAME = 'Users';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('User', factory, httpClient, USER_OPTION_COLUMN);
  }
}
