import { IUserEmailRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { USER_EMAIL_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class UserEmailService extends CollectionBaseService<IUserEmailRaw> {
  static readonly ENTITY_NAME = 'UserEmail';
  static readonly ENTITY_PLURAL_NAME = 'UserEmails';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('UserEmail', factory, httpClient, USER_EMAIL_OPTION_COLUMN);
  }
}
