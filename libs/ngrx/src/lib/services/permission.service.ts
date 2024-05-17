import { IPermissionRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { PERMISSION_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class PermissionService extends CollectionBaseService<IPermissionRaw> {
  static readonly ENTITY_NAME = 'Permission';
  static readonly ENTITY_PLURAL_NAME = 'Permissions';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Permission', factory, httpClient, PERMISSION_OPTION_COLUMN);
  }
}
