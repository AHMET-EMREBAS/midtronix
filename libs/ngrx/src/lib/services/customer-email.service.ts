import { ICustomerEmail } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { CUSTOMER_EMAIL_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class CustomerEmailService extends CollectionBaseService<ICustomerEmail> {
  static readonly ENTITY_NAME = 'CustomerEmail';
  static readonly ENTITY_PLURAL_NAME = 'CustomerEmails';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('CustomerEmail', factory, httpClient, CUSTOMER_EMAIL_OPTION_COLUMN);
  }
}
