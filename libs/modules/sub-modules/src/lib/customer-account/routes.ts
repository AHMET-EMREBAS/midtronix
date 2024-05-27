import { Routes } from '@angular/router';
import { CreateCustomerAccountComponent } from './create-customer-account/create-customer-account.component';
import { UpdateCustomerAccountComponent } from './update-customer-account/update-customer-account.component';
import { ViewCustomerAccountComponent } from './view-customer-account/view-customer-account.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeCustomerAccountComponent } from './home-customer-account/home-customer-account.component';
import { DashboardCustomerAccountComponent } from './dashboard-customer-account/dashboard-customer-account.component';
export const CustomerAccountRoutes: Routes = [
  {
    title: 'CustomerAccount Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create CustomerAccount', route: 'create', icon: 'add' },
        { label: 'View CustomerAccounts', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'CustomerAccount Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'CustomerAccount Management',
        path: 'home',
        loadComponent: () => HomeCustomerAccountComponent,
      },
      {
        title: 'CustomerAccount Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardCustomerAccountComponent,
      },
      {
        title: 'New CustomerAccount',
        path: 'create',
        loadComponent: () => CreateCustomerAccountComponent,
      },
      {
        title: 'View CustomerAccounts',
        path: 'view',
        loadComponent: () => ViewCustomerAccountComponent,
      },
      {
        title: 'Update CustomerAccount',
        path: 'update/:id',
        loadComponent: () => UpdateCustomerAccountComponent,
      },
    ],
  },
];
