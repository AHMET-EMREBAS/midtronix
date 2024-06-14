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
import { SkuMetadata, SkuViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { ISku, ISkuView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';

@Injectable()
export class SkuService extends CollectionBaseService<ISku> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sku', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class SkuViewService extends CollectionBaseService<ISkuView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('SkuView', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

export const __SkuMetadata = new SkuMetadata();
export const __SkuViewMetadata = new SkuViewMetadata();

export const __SkuFormGroup = __SkuMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const SkuFormGroup = new FormBuilder().group(__SkuFormGroup);

export const SkuSubRoutes: Routes = [
  { title: 'Sku View', path: '', loadComponent: () => AdvanceTableComponent },
  { title: 'New Sku', path: 'editor', loadComponent: () => EditorComponent },
  {
    title: 'Edit Sku',
    path: 'editor/:id',
    loadComponent: () => EditorComponent,
  },
  {
    title: 'Sku View Table',
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__SkuViewMetadata),
      provideCollectionService(SkuViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const SkuRoute: Route = {
  path: 'sku',
  title: 'Sku',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(SkuService),
    provideEntityMetadata(__SkuMetadata),
    provideFormGroup(SkuFormGroup),
  ],
  children: [...SkuSubRoutes],
};
