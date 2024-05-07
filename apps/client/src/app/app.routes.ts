import { Route } from '@angular/router';
import { ProductRoutes } from './product';

export const appRoutes: Route[] = [
  { path: 'products', loadChildren: () => ProductRoutes },
];
