import { Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeTaskComponent } from './home-task/home-task.component';
import { DashboardTaskComponent } from './dashboard-task/dashboard-task.component';
export const TaskRoutes: Routes = [
  {
    title: 'Task Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Task', route: 'create', icon: 'add' },
        { label: 'View Tasks', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Task Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Task Management',
        path: 'home',
        loadComponent: () => HomeTaskComponent,
      },
      {
        title: 'Task Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardTaskComponent,
      },
      {
        title: 'New Task',
        path: 'create',
        loadComponent: () => CreateTaskComponent,
      },
      {
        title: 'View Tasks',
        path: 'view',
        loadComponent: () => ViewTaskComponent,
      },
      {
        title: 'Update Task',
        path: 'update/:id',
        loadComponent: () => UpdateTaskComponent,
      },
    ],
  },
];
