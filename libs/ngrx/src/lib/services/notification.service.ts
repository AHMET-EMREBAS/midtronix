import { INotification } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { NOTIFICATION_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class NotificationService extends CollectionBaseService<INotification> {
  static readonly ENTITY_NAME = 'Notification';
  static readonly ENTITY_PLURAL_NAME = 'Notifications';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Notification', factory, httpClient, NOTIFICATION_OPTION_COLUMN);
  }
}
