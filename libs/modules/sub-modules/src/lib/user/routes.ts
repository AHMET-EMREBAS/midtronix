import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeUserComponent } from './home-user/home-user.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
export const UserRoutes: Routes = [
  {
    title: 'User Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create User', route: 'create', icon: 'add' },
        { label: 'View Users', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'User Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'User Management',
        path: 'home',
        loadComponent: () => HomeUserComponent,
      },
      {
        title: 'User Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardUserComponent,
      },
      {
        title: 'New User',
        path: 'create',
        loadComponent: () => CreateUserComponent,
      },
      {
        title: 'View Users',
        path: 'view',
        loadComponent: () => ViewUserComponent,
      },
      {
        title: 'Update User',
        path: 'update/:id',
        loadComponent: () => UpdateUserComponent,
      },
    ],
  },
];
