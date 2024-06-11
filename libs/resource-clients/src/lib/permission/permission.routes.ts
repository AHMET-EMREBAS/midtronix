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
import { PermissionMetadata, PermissionViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { IPermission, IPermissionView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';

@Injectable()
export class PermissionService extends CollectionBaseService<IPermission> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Permission', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class PermissionViewService extends CollectionBaseService<IPermissionView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PermissionView', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

export const __PermissionMetadata = new PermissionMetadata();
export const __PermissionViewMetadata = new PermissionViewMetadata();

export const __PermissionFormGroup = __PermissionMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const PermissionFormGroup = new FormBuilder().group(
  __PermissionFormGroup
);

export const PermissionSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__PermissionViewMetadata),
      provideCollectionService(PermissionViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const PermissionRoute: Route = {
  path: 'permission',
  title: 'Permission',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(PermissionService),
    provideEntityMetadata(__PermissionMetadata),
    provideFormGroup(PermissionFormGroup),
  ],
  children: [...PermissionSubRoutes],
};
