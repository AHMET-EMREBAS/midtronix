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
import { PriceMetadata, PriceViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { IPrice, IPriceView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';

@Injectable()
export class PriceService extends CollectionBaseService<IPrice> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Price', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class PriceViewService extends CollectionBaseService<IPriceView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PriceView', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

export const __PriceMetadata = new PriceMetadata();
export const __PriceViewMetadata = new PriceViewMetadata();

export const __PriceFormGroup = __PriceMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const PriceFormGroup = new FormBuilder().group(__PriceFormGroup);

export const PriceSubRoutes: Routes = [
  { title: 'Price View', path: '', loadComponent: () => AdvanceTableComponent },
  { title: 'New Price', path: 'editor', loadComponent: () => EditorComponent },
  {
    title: 'Edit Price',
    path: 'editor/:id',
    loadComponent: () => EditorComponent,
  },
  {
    title: 'Price View Table',
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__PriceViewMetadata),
      provideCollectionService(PriceViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const PriceRoute: Route = {
  path: 'price',
  title: 'Price',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(PriceService),
    provideEntityMetadata(__PriceMetadata),
    provideFormGroup(PriceFormGroup),
  ],
  children: [...PriceSubRoutes],
};
