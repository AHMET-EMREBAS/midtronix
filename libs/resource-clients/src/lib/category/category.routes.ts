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
import { CategoryMetadata, CategoryViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { ICategory, ICategoryView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';

@Injectable()
export class CategoryService extends CollectionBaseService<ICategory> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Category', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class CategoryViewService extends CollectionBaseService<ICategoryView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CategoryView', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

export const __CategoryMetadata = new CategoryMetadata();
export const __CategoryViewMetadata = new CategoryViewMetadata();

export const __CategoryFormGroup = __CategoryMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const CategoryFormGroup = new FormBuilder().group(__CategoryFormGroup);

export const CategorySubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__CategoryViewMetadata),
      provideCollectionService(CategoryViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const CategoryRoute: Route = {
  path: 'category',
  title: 'Category',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(CategoryService),
    provideEntityMetadata(__CategoryMetadata),
    provideFormGroup(CategoryFormGroup),
  ],
  children: [...CategorySubRoutes],
};
