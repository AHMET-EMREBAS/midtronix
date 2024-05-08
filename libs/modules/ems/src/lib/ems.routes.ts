/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { EmsComponent } from './ems/ems.component';

export const EmsRoutes: Routes = [
  { path: '', loadComponent: () => EmsComponent },
];
