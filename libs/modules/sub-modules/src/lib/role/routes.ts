import { Routes } from '@angular/router';
import { CreateRoleComponent } from './create-role/create-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { ViewRoleComponent } from './view-role/view-role.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeRoleComponent } from './home-role/home-role.component';
import { DashboardRoleComponent } from './dashboard-role/dashboard-role.component';
export const RoleRoutes: Routes = [
  {
    title: 'Role Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Role', route: 'create', icon: 'add' },
        { label: 'View Roles', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Role Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Role Management',
        path: 'home',
        loadComponent: () => HomeRoleComponent,
      },
      {
        title: 'Role Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardRoleComponent,
      },
      {
        title: 'New Role',
        path: 'create',
        loadComponent: () => CreateRoleComponent,
      },
      {
        title: 'View Roles',
        path: 'view',
        loadComponent: () => ViewRoleComponent,
      },
      {
        title: 'Update Role',
        path: 'update/:id',
        loadComponent: () => UpdateRoleComponent,
      },
    ],
  },
];
