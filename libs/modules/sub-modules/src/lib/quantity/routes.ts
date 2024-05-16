import { Routes } from '@angular/router';
import { CreateQuantityComponent } from './create-quantity/create-quantity.component';
import { UpdateQuantityComponent } from './update-quantity/update-quantity.component';
import { ViewQuantityComponent } from './view-quantity/view-quantity.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeQuantityComponent } from './home-quantity/home-quantity.component';
import { DashboardQuantityComponent } from './dashboard-quantity/dashboard-quantity.component';
export const QuantityRoutes: Routes = [
  {
    title: 'Quantity Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Quantity', route: 'create', icon: 'add' },
        { label: 'View Quantitys', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Quantity Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Quantity Management',
        path: 'home',
        loadComponent: () => HomeQuantityComponent,
      },
      {
        title: 'Quantity Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardQuantityComponent,
      },
      {
        title: 'New Quantity',
        path: 'create',
        loadComponent: () => CreateQuantityComponent,
      },
      {
        title: 'View Quantitys',
        path: 'view',
        loadComponent: () => ViewQuantityComponent,
      },
      {
        title: 'Update Quantity',
        path: 'update/:id',
        loadComponent: () => UpdateQuantityComponent,
      },
    ],
  },
];
