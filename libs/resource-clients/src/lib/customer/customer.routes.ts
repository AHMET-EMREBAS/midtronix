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
import { CustomerMetadata, CustomerViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { ICustomer, ICustomerView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class CustomerService extends CollectionBaseService<ICustomer> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Customer', factory, httpClientFactory);
  }
}

@Injectable()
export class CustomerViewService extends CollectionBaseService<ICustomerView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerView', factory, httpClientFactory);
  }
}

export const __CustomerMetadata = new CustomerMetadata();
export const __CustomerViewMetadata = new CustomerViewMetadata();

export const __CustomerFormGroup = __CustomerMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const CustomerFormGroup = new FormBuilder().group(__CustomerFormGroup);

export const CustomerSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__CustomerViewMetadata),
      provideCollectionService(CustomerViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const CustomerRoute: Route = {
  path: 'customer',
  title: 'Customer',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(CustomerService),
    provideEntityMetadata(__CustomerMetadata),
    provideFormGroup(CustomerFormGroup),
  ],
  children: [...CustomerSubRoutes],
};
