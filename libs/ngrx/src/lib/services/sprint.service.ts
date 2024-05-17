import { ISprintRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { SPRINT_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class SprintService extends CollectionBaseService<ISprintRaw> {
  static readonly ENTITY_NAME = 'Sprint';
  static readonly ENTITY_PLURAL_NAME = 'Sprints';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Sprint', factory, httpClient, SPRINT_OPTION_COLUMN);
  }
}
