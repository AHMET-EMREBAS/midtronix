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
import { QuantityMetadata, QuantityViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { IQuantity, IQuantityView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';

@Injectable()
export class QuantityService extends CollectionBaseService<IQuantity> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Quantity', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class QuantityViewService extends CollectionBaseService<IQuantityView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('QuantityView', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

export const __QuantityMetadata = new QuantityMetadata();
export const __QuantityViewMetadata = new QuantityViewMetadata();

export const __QuantityFormGroup = __QuantityMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const QuantityFormGroup = new FormBuilder().group(__QuantityFormGroup);

export const QuantitySubRoutes: Routes = [
  {
    title: 'Quantity View',
    path: '',
    loadComponent: () => AdvanceTableComponent,
  },
  {
    title: 'New Quantity',
    path: 'editor',
    loadComponent: () => EditorComponent,
  },
  {
    title: 'Edit Quantity',
    path: 'editor/:id',
    loadComponent: () => EditorComponent,
  },
  {
    title: 'Quantity View Table',
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__QuantityViewMetadata),
      provideCollectionService(QuantityViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const QuantityRoute: Route = {
  path: 'quantity',
  title: 'Quantity',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(QuantityService),
    provideEntityMetadata(__QuantityMetadata),
    provideFormGroup(QuantityFormGroup),
  ],
  children: [...QuantitySubRoutes],
};
