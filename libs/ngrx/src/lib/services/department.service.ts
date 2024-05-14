import { IDepartment } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DepartmentService extends CollectionBaseService<IDepartment> {
  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Department', factory, httpClient);
  }
}
