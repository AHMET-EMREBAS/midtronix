import { Routes } from '@angular/router';
import { CreateCustomerAddressComponent } from './create-customer-address/create-customer-address.component';
import { UpdateCustomerAddressComponent } from './update-customer-address/update-customer-address.component';
import { ViewCustomerAddressComponent } from './view-customer-address/view-customer-address.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeCustomerAddressComponent } from './home-customer-address/home-customer-address.component';
import { DashboardCustomerAddressComponent } from './dashboard-customer-address/dashboard-customer-address.component';
export const CustomerAddressRoutes: Routes = [
  {
    title: 'CustomerAddress Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create CustomerAddress', route: 'create', icon: 'add' },
        { label: 'View CustomerAddresss', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'CustomerAddress Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'CustomerAddress Management',
        path: 'home',
        loadComponent: () => HomeCustomerAddressComponent,
      },
      {
        title: 'CustomerAddress Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardCustomerAddressComponent,
      },
      {
        title: 'New CustomerAddress',
        path: 'create',
        loadComponent: () => CreateCustomerAddressComponent,
      },
      {
        title: 'View CustomerAddresss',
        path: 'view',
        loadComponent: () => ViewCustomerAddressComponent,
      },
      {
        title: 'Update CustomerAddress',
        path: 'update/:id',
        loadComponent: () => UpdateCustomerAddressComponent,
      },
    ],
  },
];
