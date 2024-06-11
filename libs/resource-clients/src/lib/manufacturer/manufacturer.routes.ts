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
import { ManufacturerMetadata, ManufacturerViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { IManufacturer, IManufacturerView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';

@Injectable()
export class ManufacturerService extends CollectionBaseService<IManufacturer> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Manufacturer', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class ManufacturerViewService extends CollectionBaseService<IManufacturerView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super(
      'ManufacturerView',
      factory,
      DefaultResourceHttpClientFactoryInstance
    );
  }
}

export const __ManufacturerMetadata = new ManufacturerMetadata();
export const __ManufacturerViewMetadata = new ManufacturerViewMetadata();

export const __ManufacturerFormGroup = __ManufacturerMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const ManufacturerFormGroup = new FormBuilder().group(
  __ManufacturerFormGroup
);

export const ManufacturerSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__ManufacturerViewMetadata),
      provideCollectionService(ManufacturerViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const ManufacturerRoute: Route = {
  path: 'manufacturer',
  title: 'Manufacturer',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(ManufacturerService),
    provideEntityMetadata(__ManufacturerMetadata),
    provideFormGroup(ManufacturerFormGroup),
  ],
  children: [...ManufacturerSubRoutes],
};
