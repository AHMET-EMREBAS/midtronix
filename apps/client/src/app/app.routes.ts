import { Route } from '@angular/router';
import { ProductRoutes } from './product';
import {} from '@mdtx/modules/website'
export const appRoutes: Route[] = [
  { path: 'website', loadChildren: () => ProductRoutes },
];
