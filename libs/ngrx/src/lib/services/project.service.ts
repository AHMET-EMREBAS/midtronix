import { IProject } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { PROJECT_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class ProjectService extends CollectionBaseService<IProject> {
  static readonly ENTITY_NAME = 'Project';
  static readonly ENTITY_PLURAL_NAME = 'Projects';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Project', factory, httpClient, PROJECT_OPTION_COLUMN);
  }
}
