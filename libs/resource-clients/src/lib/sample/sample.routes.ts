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
import { SampleMetadata, SampleViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { ISample, ISampleView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class SampleService extends CollectionBaseService<ISample> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sample', factory, httpClientFactory);
  }
}

@Injectable()
export class SampleViewService extends CollectionBaseService<ISampleView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('SampleView', factory, httpClientFactory);
  }
}

export const __SampleMetadata = new SampleMetadata();
export const __SampleViewMetadata = new SampleViewMetadata();

export const __SampleFormGroup = __SampleMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const SampleFormGroup = new FormBuilder().group(__SampleFormGroup);

export const SampleSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__SampleViewMetadata),
      provideCollectionService(SampleViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const SampleRoute: Route = {
  path: 'sample',
  title: 'Sample',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(SampleService),
    provideEntityMetadata(__SampleMetadata),
    provideFormGroup(SampleFormGroup),
  ],
  children: [...SampleSubRoutes],
};
