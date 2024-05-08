/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { PmsComponent } from './pms/pms.component';

export const PmsRoutes: Routes = [
  { path: '', loadComponent: () => PmsComponent },
];
