import { Route } from '@angular/router';
import { ClientResourceRoutes } from './sample/routes';
import { CategoryService, SampleService } from './sample/service';
import { CategoryMetadata, SampleMetadata } from '@mdtx/models';
import { FormBuilder } from '@angular/forms';
import {
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';

const sampleMetadata = new SampleMetadata();

const __sampleFormGroup = sampleMetadata
  .formFields()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

const sampleFormGroup = new FormBuilder().group(__sampleFormGroup);

const categoryMetadata = new CategoryMetadata();

const __categoryFormGroup = categoryMetadata
  .formFields()
  .map((e) => ({ [e.name]: e.control }))
  .reduce((p, c) => ({ ...p, ...c }));

const categoryFormGroup = new FormBuilder().group(__categoryFormGroup);

export const appRoutes: Route[] = [
  {
    path: 'samples',
    providers: [
      provideEntityMetadata(sampleMetadata),
      provideCollectionService(SampleService),
      provideFormGroup(sampleFormGroup),
    ],
    loadChildren: () => ClientResourceRoutes,
  },
  {
    path: 'categories',
    providers: [
      provideEntityMetadata(categoryMetadata),
      provideCollectionService(CategoryService),
      provideFormGroup(categoryFormGroup),
    ],
    loadChildren: () => ClientResourceRoutes,
  },
];
