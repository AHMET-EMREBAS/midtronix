import { ITaskRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { TASK_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class TaskService extends CollectionBaseService<ITaskRaw> {
  static readonly ENTITY_NAME = 'Task';
  static readonly ENTITY_PLURAL_NAME = 'Tasks';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Task', factory, httpClient, TASK_OPTION_COLUMN);
  }
}
