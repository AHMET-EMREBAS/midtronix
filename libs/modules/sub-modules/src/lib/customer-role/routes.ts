import { Routes } from '@angular/router';
import { CreateCustomerRoleComponent } from './create-customer-role/create-customer-role.component';
import { UpdateCustomerRoleComponent } from './update-customer-role/update-customer-role.component';
import { ViewCustomerRoleComponent } from './view-customer-role/view-customer-role.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeCustomerRoleComponent } from './home-customer-role/home-customer-role.component';
import { DashboardCustomerRoleComponent } from './dashboard-customer-role/dashboard-customer-role.component';
export const CustomerRoleRoutes: Routes = [
  {
    title: 'CustomerRole Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create CustomerRole', route: 'create', icon: 'add' },
        { label: 'View CustomerRoles', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'CustomerRole Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'CustomerRole Management',
        path: 'home',
        loadComponent: () => HomeCustomerRoleComponent,
      },
      {
        title: 'CustomerRole Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardCustomerRoleComponent,
      },
      {
        title: 'New CustomerRole',
        path: 'create',
        loadComponent: () => CreateCustomerRoleComponent,
      },
      {
        title: 'View CustomerRoles',
        path: 'view',
        loadComponent: () => ViewCustomerRoleComponent,
      },
      {
        title: 'Update CustomerRole',
        path: 'update/:id',
        loadComponent: () => UpdateCustomerRoleComponent,
      },
    ],
  },
];
