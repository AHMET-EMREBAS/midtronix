import { Routes } from '@angular/router';
import { CreateCustomerPermissionComponent } from './create-customer-permission/create-customer-permission.component';
import { UpdateCustomerPermissionComponent } from './update-customer-permission/update-customer-permission.component';
import { ViewCustomerPermissionComponent } from './view-customer-permission/view-customer-permission.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeCustomerPermissionComponent } from './home-customer-permission/home-customer-permission.component';
import { DashboardCustomerPermissionComponent } from './dashboard-customer-permission/dashboard-customer-permission.component';
export const CustomerPermissionRoutes: Routes = [
  {
    title: 'CustomerPermission Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create CustomerPermission', route: 'create', icon: 'add' },
        { label: 'View CustomerPermissions', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'CustomerPermission Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'CustomerPermission Management',
        path: 'home',
        loadComponent: () => HomeCustomerPermissionComponent,
      },
      {
        title: 'CustomerPermission Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardCustomerPermissionComponent,
      },
      {
        title: 'New CustomerPermission',
        path: 'create',
        loadComponent: () => CreateCustomerPermissionComponent,
      },
      {
        title: 'View CustomerPermissions',
        path: 'view',
        loadComponent: () => ViewCustomerPermissionComponent,
      },
      {
        title: 'Update CustomerPermission',
        path: 'update/:id',
        loadComponent: () => UpdateCustomerPermissionComponent,
      },
    ],
  },
];
