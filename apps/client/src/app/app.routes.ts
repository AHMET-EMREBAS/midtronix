import { Route } from '@angular/router';

import { WebsiteRoutes } from '@mdtx/modules/website';

export const appRoutes: Route[] = [
  { path: '', loadChildren: () => WebsiteRoutes },
];
