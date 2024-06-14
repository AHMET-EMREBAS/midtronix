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
import { AttributeMetadata, AttributeViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { IAttribute, IAttributeView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';

@Injectable()
export class AttributeService extends CollectionBaseService<IAttribute> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Attribute', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class AttributeViewService extends CollectionBaseService<IAttributeView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('AttributeView', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

export const __AttributeMetadata = new AttributeMetadata();
export const __AttributeViewMetadata = new AttributeViewMetadata();

export const __AttributeFormGroup = __AttributeMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const AttributeFormGroup = new FormBuilder().group(__AttributeFormGroup);

export const AttributeSubRoutes: Routes = [
  {
    title: 'Attribute View',
    path: '',
    loadComponent: () => AdvanceTableComponent,
  },
  {
    title: 'New Attribute',
    path: 'editor',
    loadComponent: () => EditorComponent,
  },
  {
    title: 'Edit Attribute',
    path: 'editor/:id',
    loadComponent: () => EditorComponent,
  },
  {
    title: 'Attribute View Table',
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__AttributeViewMetadata),
      provideCollectionService(AttributeViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const AttributeRoute: Route = {
  path: 'attribute',
  title: 'Attribute',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(AttributeService),
    provideEntityMetadata(__AttributeMetadata),
    provideFormGroup(AttributeFormGroup),
  ],
  children: [...AttributeSubRoutes],
};
