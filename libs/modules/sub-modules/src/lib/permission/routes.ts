import { Routes } from '@angular/router';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { UpdatePermissionComponent } from './update-permission/update-permission.component';
import { ViewPermissionComponent } from './view-permission/view-permission.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomePermissionComponent } from './home-permission/home-permission.component';
import { DashboardPermissionComponent } from './dashboard-permission/dashboard-permission.component';
export const PermissionRoutes: Routes = [
  {
    title: 'Permission Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Permission', route: 'create', icon: 'add' },
        { label: 'View Permissions', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Permission Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Permission Management',
        path: 'home',
        loadComponent: () => HomePermissionComponent,
      },
      {
        title: 'Permission Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardPermissionComponent,
      },
      {
        title: 'New Permission',
        path: 'create',
        loadComponent: () => CreatePermissionComponent,
      },
      {
        title: 'View Permissions',
        path: 'view',
        loadComponent: () => ViewPermissionComponent,
      },
      {
        title: 'Update Permission',
        path: 'update/:id',
        loadComponent: () => UpdatePermissionComponent,
      },
    ],
  },
];
