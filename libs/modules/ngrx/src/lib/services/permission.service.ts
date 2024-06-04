import { IPermission } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class PermissionService extends CollectionBaseService<IPermission> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Permission', factory);
  }
}
