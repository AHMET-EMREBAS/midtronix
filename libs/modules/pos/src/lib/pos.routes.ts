/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { PosComponent } from './pos/pos.component';

export const PosRoutes: Routes = [
  { path: '', loadComponent: () => PosComponent },
];
