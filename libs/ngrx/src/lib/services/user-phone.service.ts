import { IUserPhoneRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { USER_PHONE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class UserPhoneService extends CollectionBaseService<IUserPhoneRaw> {
  static readonly ENTITY_NAME = 'UserPhone';
  static readonly ENTITY_PLURAL_NAME = 'UserPhones';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('UserPhone', factory, httpClient, USER_PHONE_OPTION_COLUMN);
  }
}
