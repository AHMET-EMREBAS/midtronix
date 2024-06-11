import { Route, Routes } from '@angular/router';
import { AdvanceTableComponent } from '@mdtx/material/table';
import { EditorComponent } from '@mdtx/material/form';
import {
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';
import { FormBuilder } from '@angular/forms';
import { PhoneMetadata, PhoneViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { IPhone, IPhoneView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
  SidenavLeftCenterProvider,
  ToolbarLeftProvider,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class PhoneService extends CollectionBaseService<IPhone> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Phone', factory, httpClientFactory);
  }
}

@Injectable()
export class PhoneViewService extends CollectionBaseService<IPhoneView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PhoneView', factory, httpClientFactory);
  }
}

export const __PhoneMetadata = new PhoneMetadata();
export const __PhoneViewMetadata = new PhoneViewMetadata();

export const __PhoneFormGroup = __PhoneMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const PhoneFormGroup = new FormBuilder().group(__PhoneFormGroup);

export const PhoneSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'views',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__PhoneViewMetadata),
      provideCollectionService(PhoneViewService),
    ],
  },
];

export const PhoneRoute: Route = {
  path: 'phone',
  title: 'Phone',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'View', icon: 'table', route: './' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(PhoneService),
    provideEntityMetadata(__PhoneMetadata),
    provideFormGroup(PhoneFormGroup),
  ],
  children: [...PhoneSubRoutes],
};
