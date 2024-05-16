import { Routes } from '@angular/router';
import { CreateSkuComponent } from './create-sku/create-sku.component';
import { UpdateSkuComponent } from './update-sku/update-sku.component';
import { ViewSkuComponent } from './view-sku/view-sku.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeSkuComponent } from './home-sku/home-sku.component';
import { DashboardSkuComponent } from './dashboard-sku/dashboard-sku.component';
export const SkuRoutes: Routes = [
  {
    title: 'Sku Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Sku', route: 'create', icon: 'add' },
        { label: 'View Skus', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Sku Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Sku Management',
        path: 'home',
        loadComponent: () => HomeSkuComponent,
      },
      {
        title: 'Sku Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardSkuComponent,
      },
      {
        title: 'New Sku',
        path: 'create',
        loadComponent: () => CreateSkuComponent,
      },
      {
        title: 'View Skus',
        path: 'view',
        loadComponent: () => ViewSkuComponent,
      },
      {
        title: 'Update Sku',
        path: 'update/:id',
        loadComponent: () => UpdateSkuComponent,
      },
    ],
  },
];
