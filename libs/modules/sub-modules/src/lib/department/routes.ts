import { Routes } from '@angular/router';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeDepartmentComponent } from './home-department/home-department.component';
import { DashboardDepartmentComponent } from './dashboard-department/dashboard-department.component';
export const DepartmentRoutes: Routes = [
  {
    title: 'Department Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Department', route: 'create', icon: 'add' },
        { label: 'View Departments', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Department Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Department Management',
        path: 'home',
        loadComponent: () => HomeDepartmentComponent,
      },
      {
        title: 'Department Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardDepartmentComponent,
      },
      {
        title: 'New Department',
        path: 'create',
        loadComponent: () => CreateDepartmentComponent,
      },
      {
        title: 'View Departments',
        path: 'view',
        loadComponent: () => ViewDepartmentComponent,
      },
      {
        title: 'Update Department',
        path: 'update/:id',
        loadComponent: () => UpdateDepartmentComponent,
      },
    ],
  },
];
