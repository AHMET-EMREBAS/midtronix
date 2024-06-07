import { Route } from '@angular/router';
import { SampleRoutes } from './sample/sample.routes';
import {
  provideAdvanceTableMetadata,
  provideAdvanceTableCollectionService,
} from '@mdtx/material/table';
import { SampleService } from './sample/sample.service';
import { SampleMetadata } from '@mdtx/models';

export const appRoutes: Route[] = [
  {
    path: 'samples',

    providers: [
      provideAdvanceTableMetadata(new SampleMetadata()),
      provideAdvanceTableCollectionService(SampleService),
    ],

    loadChildren: () => SampleRoutes,
  },
];
