import { IRole } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { ROLE_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class RoleService extends CollectionBaseService<IRole> {
  static readonly ENTITY_NAME = 'Role';
  static readonly ENTITY_PLURAL_NAME = 'Roles';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Role', factory, httpClient, ROLE_OPTION_COLUMN);
  }
}
