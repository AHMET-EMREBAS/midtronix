import { Route, Routes } from '@angular/router';
import {
  AdvanceTableComponent,
  provideActionButtonHandler,
} from '@mdtx/material/table';
import { EditorComponent } from '@mdtx/material/form';
import {
  DefaultResourceHttpClientFactoryInstance,
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';
import { FormBuilder } from '@angular/forms';
import { RoleMetadata, RoleViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { IRole, IRoleView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';

@Injectable()
export class RoleService extends CollectionBaseService<IRole> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Role', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class RoleViewService extends CollectionBaseService<IRoleView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('RoleView', factory, DefaultResourceHttpClientFactoryInstance);
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
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
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
