import { INotification } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class NotificationService extends CollectionBaseService<INotification> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Notification', factory);
  }
}
