import { Route } from '@angular/router';
import { InventoryRoutes } from '@mdtx/modules/inventory';

export const appRoutes: Route[] = [
  { path: '', loadChildren: () => InventoryRoutes },
];
