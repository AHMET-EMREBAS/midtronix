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
import { AddressMetadata, AddressViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { IAddress, IAddressView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class AddressService extends CollectionBaseService<IAddress> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Address', factory, httpClientFactory);
  }
}

@Injectable()
export class AddressViewService extends CollectionBaseService<IAddressView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('AddressView', factory, httpClientFactory);
  }
}

export const __AddressMetadata = new AddressMetadata();
export const __AddressViewMetadata = new AddressViewMetadata();

export const __AddressFormGroup = __AddressMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const AddressFormGroup = new FormBuilder().group(__AddressFormGroup);

export const AddressSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__AddressViewMetadata),
      provideCollectionService(AddressViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const AddressRoute: Route = {
  path: 'address',
  title: 'Address',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(AddressService),
    provideEntityMetadata(__AddressMetadata),
    provideFormGroup(AddressFormGroup),
  ],
  children: [...AddressSubRoutes],
};
