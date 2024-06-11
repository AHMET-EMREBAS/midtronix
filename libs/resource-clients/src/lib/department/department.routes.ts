import { Route, Routes } from '@angular/router';
import {
  AdvanceTableComponent,
  provideActionButtonHandler,
} from '@mdtx/material/table';
import { EditorComponent } from '@mdtx/material/form';
import {
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';
import { FormBuilder } from '@angular/forms';
import { DepartmentMetadata, DepartmentViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { IDepartment, IDepartmentView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class DepartmentService extends CollectionBaseService<IDepartment> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Department', factory, httpClientFactory);
  }
}

@Injectable()
export class DepartmentViewService extends CollectionBaseService<IDepartmentView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('DepartmentView', factory, httpClientFactory);
  }
}

export const __DepartmentMetadata = new DepartmentMetadata();
export const __DepartmentViewMetadata = new DepartmentViewMetadata();

export const __DepartmentFormGroup = __DepartmentMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const DepartmentFormGroup = new FormBuilder().group(
  __DepartmentFormGroup
);

export const DepartmentSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__DepartmentViewMetadata),
      provideCollectionService(DepartmentViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const DepartmentRoute: Route = {
  path: 'department',
  title: 'Department',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(DepartmentService),
    provideEntityMetadata(__DepartmentMetadata),
    provideFormGroup(DepartmentFormGroup),
  ],
  children: [...DepartmentSubRoutes],
};
