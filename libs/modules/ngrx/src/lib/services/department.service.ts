import { IDepartment } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class DepartmentService extends CollectionBaseService<IDepartment> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Department', factory);
  }
}
