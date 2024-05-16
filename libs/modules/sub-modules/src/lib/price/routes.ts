import { Routes } from '@angular/router';
import { CreatePriceComponent } from './create-price/create-price.component';
import { UpdatePriceComponent } from './update-price/update-price.component';
import { ViewPriceComponent } from './view-price/view-price.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomePriceComponent } from './home-price/home-price.component';
import { DashboardPriceComponent } from './dashboard-price/dashboard-price.component';
export const PriceRoutes: Routes = [
  {
    title: 'Price Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Price', route: 'create', icon: 'add' },
        { label: 'View Prices', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Price Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Price Management',
        path: 'home',
        loadComponent: () => HomePriceComponent,
      },
      {
        title: 'Price Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardPriceComponent,
      },
      {
        title: 'New Price',
        path: 'create',
        loadComponent: () => CreatePriceComponent,
      },
      {
        title: 'View Prices',
        path: 'view',
        loadComponent: () => ViewPriceComponent,
      },
      {
        title: 'Update Price',
        path: 'update/:id',
        loadComponent: () => UpdatePriceComponent,
      },
    ],
  },
];
