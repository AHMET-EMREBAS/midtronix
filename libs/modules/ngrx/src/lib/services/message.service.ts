import { IMessage } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class MessageService extends CollectionBaseService<IMessage> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Message', factory);
  }
}
