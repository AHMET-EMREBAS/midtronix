import { Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { DashboardCustomerComponent } from './dashboard-customer/dashboard-customer.component';
export const CustomerRoutes: Routes = [
  {
    title: 'Customer Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Customer', route: 'create', icon: 'add' },
        { label: 'View Customers', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Customer Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Customer Management',
        path: 'home',
        loadComponent: () => HomeCustomerComponent,
      },
      {
        title: 'Customer Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardCustomerComponent,
      },
      {
        title: 'New Customer',
        path: 'create',
        loadComponent: () => CreateCustomerComponent,
      },
      {
        title: 'View Customers',
        path: 'view',
        loadComponent: () => ViewCustomerComponent,
      },
      {
        title: 'Update Customer',
        path: 'update/:id',
        loadComponent: () => UpdateCustomerComponent,
      },
    ],
  },
];
