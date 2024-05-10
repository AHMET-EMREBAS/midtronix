/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { AppLayoutComponent, SidenavLeftBottomProvider } from '@mdtx/material/layout';

export const PmsRoutes: Routes = [
  {
    title: 'Project Management',
    path: '',
    loadComponent: () => AppLayoutComponent,
    providers:[ 
      SidenavLeftBottomProvider.provide([
        { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
      ]),
    ]
  },
];
