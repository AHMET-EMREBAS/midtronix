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
import { ProductMetadata, ProductViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { IProduct, IProductView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class ProductService extends CollectionBaseService<IProduct> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Product', factory, httpClientFactory);
  }
}

@Injectable()
export class ProductViewService extends CollectionBaseService<IProductView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('ProductView', factory, httpClientFactory);
  }
}

export const __ProductMetadata = new ProductMetadata();
export const __ProductViewMetadata = new ProductViewMetadata();

export const __ProductFormGroup = __ProductMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const ProductFormGroup = new FormBuilder().group(__ProductFormGroup);

export const ProductSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__ProductViewMetadata),
      provideCollectionService(ProductViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const ProductRoute: Route = {
  path: 'product',
  title: 'Product',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(ProductService),
    provideEntityMetadata(__ProductMetadata),
    provideFormGroup(ProductFormGroup),
  ],
  children: [...ProductSubRoutes],
};
