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
import {
  ICreateSerialNumberDto,
  IQuerySerialNumberViewDto,
  IUpdateSerialNumberDto,
  SerialNumberMetadata,
  SerialNumberViewMetadata,
} from '@mdtx/models';

import { Injectable } from '@angular/core';
import { CollectionBaseService } from '@mdtx/material/core';
import { ISerialNumber, ISerialNumberView } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { SerialNumberEditorComponent } from './serial-number-editor/serial-number-editor.component';

@Injectable()
export class SerialNumberService extends CollectionBaseService<
  ISerialNumber,
  ICreateSerialNumberDto,
  IUpdateSerialNumberDto
> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('SerialNumber', factory, DefaultResourceHttpClientFactoryInstance);
  }
}

@Injectable()
export class SerialNumberViewService extends CollectionBaseService<ISerialNumberView> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super(
      'SerialNumberView',
      factory,
      DefaultResourceHttpClientFactoryInstance
    );
  }
}

export const __SerialNumberMetadata = new SerialNumberMetadata();
export const __SerialNumberViewMetadata = new SerialNumberViewMetadata();

export const __SerialNumberFormGroup = __SerialNumberMetadata
  .formFieldsWithController()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

export const SerialNumberFormGroup = new FormBuilder().group(
  __SerialNumberFormGroup
);

export const SerialNumberSubRoutes: Routes = [
  {
    title: 'SerialNumber View',
    path: '',
    loadComponent: () => AdvanceTableComponent,
  },
  {
    title: 'New SerialNumber',
    path: 'editor',
    loadComponent: () => SerialNumberEditorComponent,
    providers: [SerialNumberService, SerialNumberViewService],
  },
  {
    title: 'Edit SerialNumber',
    path: 'editor/:id',
    loadComponent: () => EditorComponent,
  },
  {
    title: 'SerialNumber View Table',
    path: 'view',
    loadComponent: () => AdvanceTableComponent,
    providers: [
      provideEntityMetadata(__SerialNumberViewMetadata),
      provideCollectionService(SerialNumberViewService),
      provideActionButtonHandler((id: any) => ['../', 'editor', id]),
    ],
  },
];

export const SerialNumberRoute: Route = {
  path: 'serial-number',
  title: 'SerialNumber',
  loadComponent: () => ModuleLayoutComponent,
  providers: [
    ContentCenterLeftProvider.provide([
      { label: 'Entity', icon: 'table', route: './' },
      { label: 'View', icon: 'table_view', route: 'view' },
      { label: 'Add', icon: 'add', route: 'editor' },
    ]),
    provideCollectionService(SerialNumberService),
    provideEntityMetadata(__SerialNumberMetadata),
    provideFormGroup(SerialNumberFormGroup),
  ],
  children: [...SerialNumberSubRoutes],
};
