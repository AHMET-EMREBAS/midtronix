import { Route, Routes } from '@angular/router';
import { AdvanceTableComponent } from '@mdtx/material/table';
import { EditorComponent } from '@mdtx/material/form';
import {
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';
import { FormBuilder } from '@angular/forms';
import { EmailMetadata, EmailViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { IEmail, IEmailView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
  SidenavLeftCenterProvider,
  ToolbarLeftProvider,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class EmailService extends CollectionBaseService<IEmail> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Email', factory, httpClientFactory);
  }
}

@Injectable()
export class EmailViewService extends CollectionBaseService<IEmailView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('EmailView', factory, httpClientFactory);
  }
}

export const __EmailMetadata = new EmailMetadata();
export const __EmailViewMetadata = new EmailViewMetadata();

export const __EmailFormGroup = __EmailMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const EmailFormGroup = new FormBuilder().group(__EmailFormGroup);

export const EmailSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'views',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__EmailViewMetadata),
      provideCollectionService(EmailViewService),
    ],
  },
];

export const EmailRoute: Route = {
  path: 'email',
  title: 'Email',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'View', icon: 'table', route: './' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(EmailService),
    provideEntityMetadata(__EmailMetadata),
    provideFormGroup(EmailFormGroup),
  ],
  children: [...EmailSubRoutes],
};