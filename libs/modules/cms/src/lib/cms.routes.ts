/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { CmsComponent } from './cms/cms.component';

export const CmsRoutes: Routes = [
  { path: '', loadComponent: () => CmsComponent },
];
