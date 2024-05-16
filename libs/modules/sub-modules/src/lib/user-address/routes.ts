import { Routes } from '@angular/router';
import { CreateUserAddressComponent } from './create-user-address/create-user-address.component';
import { UpdateUserAddressComponent } from './update-user-address/update-user-address.component';
import { ViewUserAddressComponent } from './view-user-address/view-user-address.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeUserAddressComponent } from './home-user-address/home-user-address.component';
import { DashboardUserAddressComponent } from './dashboard-user-address/dashboard-user-address.component';
export const UserAddressRoutes: Routes = [
  {
    title: 'UserAddress Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create UserAddress', route: 'create', icon: 'add' },
        { label: 'View UserAddresss', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'UserAddress Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'UserAddress Management',
        path: 'home',
        loadComponent: () => HomeUserAddressComponent,
      },
      {
        title: 'UserAddress Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardUserAddressComponent,
      },
      {
        title: 'New UserAddress',
        path: 'create',
        loadComponent: () => CreateUserAddressComponent,
      },
      {
        title: 'View UserAddresss',
        path: 'view',
        loadComponent: () => ViewUserAddressComponent,
      },
      {
        title: 'Update UserAddress',
        path: 'update/:id',
        loadComponent: () => UpdateUserAddressComponent,
      },
    ],
  },
];
