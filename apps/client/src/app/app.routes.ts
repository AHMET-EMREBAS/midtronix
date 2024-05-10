import { Route } from '@angular/router';
import { WebsiteRoutes } from '@mdtx/modules/website';
import { CmsRoutes } from '@mdtx/modules/cms';
import { InventoryRoutes } from '@mdtx/modules/inventory';
import { EmsRoutes } from '@mdtx/modules/ems';
import { PmsRoutes } from '@mdtx/modules/pms';
import { PosRoutes } from '@mdtx/modules/pos';
import { SampleLayoutRoutes } from '@mdtx/material/layout';

export const appRoutes: Route[] = [
  { path: '', loadChildren: () => SampleLayoutRoutes },

  // { path: 'website', loadChildren: () => WebsiteRoutes },
  // { path: 'cms', loadChildren: () => CmsRoutes },
  // { path: 'ems', loadChildren: () => EmsRoutes },
  // { path: 'inventory', loadChildren: () => InventoryRoutes },
  // { path: 'pms', loadChildren: () => PmsRoutes },
  // { path: 'pos', loadChildren: () => PosRoutes },
];
