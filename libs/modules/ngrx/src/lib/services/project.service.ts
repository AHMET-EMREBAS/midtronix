import { IProject } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class ProjectService extends CollectionBaseService<IProject> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Project', factory);
  }
}
