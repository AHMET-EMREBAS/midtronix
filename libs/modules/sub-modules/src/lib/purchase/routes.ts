import { Routes } from '@angular/router';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';
import { UpdatePurchaseComponent } from './update-purchase/update-purchase.component';
import { ViewPurchaseComponent } from './view-purchase/view-purchase.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomePurchaseComponent } from './home-purchase/home-purchase.component';
import { DashboardPurchaseComponent } from './dashboard-purchase/dashboard-purchase.component';
export const PurchaseRoutes: Routes = [
  {
    title: 'Purchase Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Purchase', route: 'create', icon: 'add' },
        { label: 'View Purchases', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Purchase Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Purchase Management',
        path: 'home',
        loadComponent: () => HomePurchaseComponent,
      },
      {
        title: 'Purchase Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardPurchaseComponent,
      },
      {
        title: 'New Purchase',
        path: 'create',
        loadComponent: () => CreatePurchaseComponent,
      },
      {
        title: 'View Purchases',
        path: 'view',
        loadComponent: () => ViewPurchaseComponent,
      },
      {
        title: 'Update Purchase',
        path: 'update/:id',
        loadComponent: () => UpdatePurchaseComponent,
      },
    ],
  },
];
