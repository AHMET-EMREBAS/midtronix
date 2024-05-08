/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';

export const InventoryRoutes: Routes = [
  { path: '', loadComponent: () => InventoryComponent },
];
