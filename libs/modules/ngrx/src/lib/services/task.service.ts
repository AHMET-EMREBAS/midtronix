import { ITask } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class TaskService extends CollectionBaseService<ITask> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Task', factory);
  }
}
