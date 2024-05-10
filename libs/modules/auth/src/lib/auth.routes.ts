/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftBottomProvider,
} from '@mdtx/material/layout';

export const AuthRoutes: Routes = [
  {
    title: 'Security Management',
    path: '',
    loadComponent: () => AppLayoutComponent,
    providers: [
      SidenavLeftBottomProvider.provide([
        { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
      ]),
    ],
  },
];
