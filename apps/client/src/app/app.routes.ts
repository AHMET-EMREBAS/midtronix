import { Route } from '@angular/router';
import { ClientResourceRoutes } from './sample/routes';
import {
  provideAdvanceTableMetadata,
  provideAdvanceTableCollectionService,
} from '@mdtx/material/table';
import { SampleService } from './sample/service';
import { SampleMetadata } from '@mdtx/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CollectionBaseService,
  provideCollectionService,
  provideEntityMetadata,
  provideFormGroup,
} from '@mdtx/material/core';

const sampleFormGroup = new FormGroup({
  name: new FormControl('', [Validators.required]),
  active: new FormControl(true, [Validators.required]),
});

const sampleFormFields = [
  {
    type: 'string',
    control: sampleFormGroup.get('name'),
    name: 'name',
    label: 'Sample Name',
  },
  {
    type: 'boolean',
    control: sampleFormGroup.get('active'),
    name: 'active',
    label: 'Active',
  },
];

export const appRoutes: Route[] = [
  {
    path: 'samples',

    providers: [
      provideEntityMetadata(new SampleMetadata()),
      provideCollectionService(SampleService),
      provideFormGroup(sampleFormGroup),
      
    ],

    loadChildren: () => ClientResourceRoutes,
  },
];
