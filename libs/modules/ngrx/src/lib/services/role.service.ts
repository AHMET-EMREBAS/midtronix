import { IRole } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class RoleService extends CollectionBaseService<IRole> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Role', factory);
  }
}
