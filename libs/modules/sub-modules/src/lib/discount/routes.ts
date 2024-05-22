import { Routes } from '@angular/router';
import { CreateDiscountComponent } from './create-discount/create-discount.component';
import { UpdateDiscountComponent } from './update-discount/update-discount.component';
import { ViewDiscountComponent } from './view-discount/view-discount.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeDiscountComponent } from './home-discount/home-discount.component';
import { DashboardDiscountComponent } from './dashboard-discount/dashboard-discount.component';
export const DiscountRoutes: Routes = [
  {
    title: 'Discount Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Discount', route: 'create', icon: 'add' },
        { label: 'View Discounts', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Discount Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Discount Management',
        path: 'home',
        loadComponent: () => HomeDiscountComponent,
      },
      {
        title: 'Discount Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardDiscountComponent,
      },
      {
        title: 'New Discount',
        path: 'create',
        loadComponent: () => CreateDiscountComponent,
      },
      {
        title: 'View Discounts',
        path: 'view',
        loadComponent: () => ViewDiscountComponent,
      },
      {
        title: 'Update Discount',
        path: 'update/:id',
        loadComponent: () => UpdateDiscountComponent,
      },
    ],
  },
];
