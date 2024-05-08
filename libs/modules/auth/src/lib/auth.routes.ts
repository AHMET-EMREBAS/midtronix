/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const AuthRoutes: Routes = [
  { path: '', loadComponent: () => AuthComponent },
];
