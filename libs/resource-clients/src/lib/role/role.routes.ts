import { Route, Routes } from '@angular/router';
import { AdvanceTableComponent } from '@mdtx/material/table';
import { EditorComponent } from '@mdtx/material/form';
import {
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';
import { FormBuilder } from '@angular/forms';
import { RoleMetadata, RoleViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { IRole, IRoleView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class RoleService extends CollectionBaseService<IRole> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Role', factory, httpClientFactory);
  }
}

@Injectable()
export class RoleViewService extends CollectionBaseService<IRoleView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('RoleView', factory, httpClientFactory);
  }
}

export const __RoleMetadata = new RoleMetadata();
export const __RoleViewMetadata = new RoleViewMetadata();

export const __RoleFormGroup = __RoleMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const RoleFormGroup = new FormBuilder().group(__RoleFormGroup);

export const RoleSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__RoleViewMetadata),
      provideCollectionService(RoleViewService),
    ],
  },
];

export const RoleRoute: Route = {
  path: 'role',
  title: 'Role',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(RoleService),
    provideEntityMetadata(__RoleMetadata),
    provideFormGroup(RoleFormGroup),
  ],
  children: [...RoleSubRoutes],
};
