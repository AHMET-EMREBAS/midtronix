import { Route } from '@angular/router';
import { WebsiteRoutes } from '@mdtx/modules/website';
import { ProductFormComponent } from '@mdtx/client-services';
export const appRoutes: Route[] = [
  { path: '', loadComponent: () => ProductFormComponent },

  { path: 'some', loadChildren: () => WebsiteRoutes },
];
