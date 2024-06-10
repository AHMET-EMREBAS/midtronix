import { Route, Routes } from '@angular/router';
import { AdvanceTableComponent } from '@mdtx/material/table';
import { EditorComponent } from '@mdtx/material/form';
import {
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';
import { FormBuilder } from '@angular/forms';
import { SupplierMetadata, SupplierViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { ISupplier, ISupplierView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
  SidenavLeftCenterProvider,
  ToolbarLeftProvider,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class SupplierService extends CollectionBaseService<ISupplier> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Supplier', factory, httpClientFactory);
  }
}

@Injectable()
export class SupplierViewService extends CollectionBaseService<ISupplierView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('SupplierView', factory, httpClientFactory);
  }
}

export const __SupplierMetadata = new SupplierMetadata();
export const __SupplierViewMetadata = new SupplierViewMetadata();

export const __SupplierFormGroup = __SupplierMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const SupplierFormGroup = new FormBuilder().group(__SupplierFormGroup);

export const SupplierSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'views',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__SupplierViewMetadata),
      provideCollectionService(SupplierViewService),
    ],
  },
];

export const SupplierRoute: Route = {
  path: 'supplier',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(SupplierService),
    provideEntityMetadata(__SupplierMetadata),
    provideFormGroup(SupplierFormGroup),
  ],
  children: [...SupplierSubRoutes],
};
