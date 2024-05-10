/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftTopProvider,
} from '@mdtx/material/layout';
import { InventoryRoutes } from '@mdtx/modules/inventory';
import { CmsRoutes } from '@mdtx/modules/cms';
import { PmsRoutes } from '@mdtx/modules/pms';
import { EmsRoutes } from '@mdtx/modules/ems';
import { AuthRoutes } from '@mdtx/modules/auth';
import { PosRoutes } from '@mdtx/modules/pos';

export const WebsiteRoutes: Routes = [
  {
    title: 'Welcome',
    path: '',
    loadComponent: () => AppLayoutComponent,
    providers: [
      SidenavLeftTopProvider.provide([
        { label: 'Auth', route: '/auth', icon: 'security' },
        { label: 'Customers', route: '/cms', icon: 'groups' },
        { label: 'Employees', route: '/ems', icon: 'business_center' },
        { label: 'Inventory ', route: '/inventory', icon: 'inventory' },
        { label: 'POS', route: '/pos', icon: 'point_of_sale' },
        { label: 'Projects', route: '/pms', icon: 'task' },
      ]),
    ],
  },
  { path: 'auth', loadChildren: () => AuthRoutes },
  { path: 'cms', loadChildren: () => CmsRoutes },
  { path: 'ems', loadChildren: () => EmsRoutes },
  {
    path: 'inventory',
    loadChildren: () => InventoryRoutes,
  },
  { path: 'pos', loadChildren: () => PosRoutes },
  { path: 'pms', loadChildren: () => PmsRoutes },
];
