import { Route, Routes } from '@angular/router';
import { AdvanceTableComponent } from '@mdtx/material/table';
import { EditorComponent } from '@mdtx/material/form';
import {
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';
import { FormBuilder } from '@angular/forms';
import { UserMetadata, UserViewMetadata } from '@mdtx/models';

import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { IUser, IUserView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
  SidenavLeftCenterProvider,
  ToolbarLeftProvider,
} from '@mdtx/material/layout';
const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class UserService extends CollectionBaseService<IUser> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('User', factory, httpClientFactory);
  }
}

@Injectable()
export class UserViewService extends CollectionBaseService<IUserView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('UserView', factory, httpClientFactory);
  }
}

export const __UserMetadata = new UserMetadata();
export const __UserViewMetadata = new UserViewMetadata();

export const __UserFormGroup = __UserMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const UserFormGroup = new FormBuilder().group(__UserFormGroup);

export const UserSubRoutes: Routes = [
  { path: '', loadComponent: () => AdvanceTableComponent },
  { path: 'editor', loadComponent: () => EditorComponent },
  { path: 'editor/:id', loadComponent: () => EditorComponent },
  {
    path: 'views',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__UserViewMetadata),
      provideCollectionService(UserViewService),
    ],
  },
];

export const UserRoute: Route = {
  path: 'user',
  title: 'User',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'View', icon: 'table', route: './' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(UserService),
    provideEntityMetadata(__UserMetadata),
    provideFormGroup(UserFormGroup),
  ],
  children: [...UserSubRoutes],
};
