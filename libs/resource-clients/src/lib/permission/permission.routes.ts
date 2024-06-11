import { Route, Routes } from '@angular/router';
import { AdvanceTableComponent } from '@mdtx/material/table';
import { EditorComponent } from '@mdtx/material/form';
import {
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';
import { FormBuilder } from '@angular/forms';
import { PermissionMetadata, PermissionViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { IPermission, IPermissionView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
  SidenavLeftCenterProvider,
  ToolbarLeftProvider,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class PermissionService extends CollectionBaseService<IPermission> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Permission', factory, httpClientFactory);
  }
}

@Injectable()
export class PermissionViewService extends CollectionBaseService<IPermissionView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PermissionView', factory, httpClientFactory);
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
    path: 'views',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__PermissionViewMetadata),
      provideCollectionService(PermissionViewService),
    ],
  },
];

export const PermissionRoute: Route = {
  path: 'permission',
  title: 'Permission',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'View', icon: 'table', route: './' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(PermissionService),
    provideEntityMetadata(__PermissionMetadata),
    provideFormGroup(PermissionFormGroup),
  ],
  children: [...PermissionSubRoutes],
};
