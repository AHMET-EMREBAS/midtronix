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
import { StoreMetadata, StoreViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { IStore, IStoreView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class StoreService extends CollectionBaseService<IStore> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Store', factory, httpClientFactory);
  }
}

@Injectable()
export class StoreViewService extends CollectionBaseService<IStoreView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('StoreView', factory, httpClientFactory);
  }
}

export const __StoreMetadata = new StoreMetadata();
export const __StoreViewMetadata = new StoreViewMetadata();

export const __StoreFormGroup = __StoreMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const StoreFormGroup = new FormBuilder().group(__StoreFormGroup);

export const StoreSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__StoreViewMetadata),
      provideCollectionService(StoreViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const StoreRoute: Route = {
  path: 'store',
  title: 'Store',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(StoreService),
    provideEntityMetadata(__StoreMetadata),
    provideFormGroup(StoreFormGroup),
  ],
  children: [...StoreSubRoutes],
};
