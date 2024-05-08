/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { WebsiteComponent } from './website/website.component';

export const WebsiteRoutes: Routes = [
  { path: '', loadComponent: () => WebsiteComponent },
];
