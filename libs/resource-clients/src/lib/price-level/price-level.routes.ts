import { Route, Routes } from '@angular/router';
import { AdvanceTableComponent } from '@mdtx/material/table';
import { EditorComponent } from '@mdtx/material/form';
import {
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';
import { FormBuilder } from '@angular/forms';
import { PriceLevelMetadata, PriceLevelViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { IPriceLevel, IPriceLevelView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
  SidenavLeftCenterProvider,
  ToolbarLeftProvider,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class PriceLevelService extends CollectionBaseService<IPriceLevel> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PriceLevel', factory, httpClientFactory);
  }
}

@Injectable()
export class PriceLevelViewService extends CollectionBaseService<IPriceLevelView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PriceLevelView', factory, httpClientFactory);
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
    path: 'views',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__PriceLevelViewMetadata),
      provideCollectionService(PriceLevelViewService),
    ],
  },
];

export const PriceLevelRoute: Route = {
  path: 'price-level',
  title: 'PriceLevel',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'View', icon: 'table', route: './' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(PriceLevelService),
    provideEntityMetadata(__PriceLevelMetadata),
    provideFormGroup(PriceLevelFormGroup),
  ],
  children: [...PriceLevelSubRoutes],
};
