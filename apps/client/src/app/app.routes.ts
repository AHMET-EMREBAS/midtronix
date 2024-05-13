import { Route } from '@angular/router';
import { ProductRoutes } from '@mdtx/client-services';
export const appRoutes: Route[] = [
  { path: '', loadChildren: () => ProductRoutes },
];
