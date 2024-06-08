import { Route } from '@angular/router';
import { ClientResourceRoutes } from './sample/routes';
import { SampleService } from './sample/service';
import { SampleMetadata } from '@mdtx/models';
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

export const appRoutes: Route[] = [
  {
    path: 'samples',
    providers: [
      provideEntityMetadata(sampleMetadata),
      provideCollectionService(SampleService),
      provideFormGroup(sampleFormGroup),

      {
        provide: 'some',
        useFactory(service: SampleService) {
          service.entityActions$.subscribe(console.log);
          return null;
        },
      },
    ],
    loadChildren: () => ClientResourceRoutes,
  },
];
