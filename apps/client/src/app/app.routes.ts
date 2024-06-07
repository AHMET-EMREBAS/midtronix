import { Route } from '@angular/router';
import { SampleRoutes } from './sample/sample.routes';

export const appRoutes: Route[] = [
  { path: 'samples', loadChildren: () => SampleRoutes },
];
