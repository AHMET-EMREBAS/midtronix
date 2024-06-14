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
import { ProductMetadata, ProductViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { IProduct, IProductView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';

@Injectable()
export class ProductService extends CollectionBaseService<IProduct> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Product', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class ProductViewService extends CollectionBaseService<IProductView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('ProductView', factory, DefaultResourceHttpClientFactoryInstance);
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
  { title: 'Product', path: '', loadComponent: () => AdvanceTableComponent },
  {
    title: 'Save Product',
    path: 'editor',
    loadComponent: () => EditorComponent,
  },

  {
    title: 'Edit Product',
    path: 'editor/:id',
    loadComponent: () => EditorComponent,
  },
  {
    title: 'View Products',
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
