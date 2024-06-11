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
import { PriceLevelMetadata, PriceLevelViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { IPriceLevel, IPriceLevelView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';

@Injectable()
export class PriceLevelService extends CollectionBaseService<IPriceLevel> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PriceLevel', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class PriceLevelViewService extends CollectionBaseService<IPriceLevelView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PriceLevelView', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

export const __PriceLevelMetadata = new PriceLevelMetadata();
export const __PriceLevelViewMetadata = new PriceLevelViewMetadata();

export const __PriceLevelFormGroup = __PriceLevelMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const PriceLevelFormGroup = new FormBuilder().group(
  __PriceLevelFormGroup
);

export const PriceLevelSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__PriceLevelViewMetadata),
      provideCollectionService(PriceLevelViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const PriceLevelRoute: Route = {
  path: 'price-level',
  title: 'PriceLevel',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(PriceLevelService),
    provideEntityMetadata(__PriceLevelMetadata),
    provideFormGroup(PriceLevelFormGroup),
  ],
  children: [...PriceLevelSubRoutes],
};
