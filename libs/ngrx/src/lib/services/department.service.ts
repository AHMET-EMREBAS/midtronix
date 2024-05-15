import { IDepartment } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DepartmentService extends CollectionBaseService<IDepartment> {
  static readonly ENTITY_NAME = 'Department';
  static readonly ENTITY_PLURAL_NAME = 'Departments';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Department', factory, httpClient);
  }
}
