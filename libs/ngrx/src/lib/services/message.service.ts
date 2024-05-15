import { IMessage } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { MESSAGE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class MessageService extends CollectionBaseService<IMessage> {
  static readonly ENTITY_NAME = 'Message';
  static readonly ENTITY_PLURAL_NAME = 'Messages';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Message', factory, httpClient, MESSAGE_OPTION_COLUMN);
  }
}
