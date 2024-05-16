import { Routes } from '@angular/router';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { UpdateSprintComponent } from './update-sprint/update-sprint.component';
import { ViewSprintComponent } from './view-sprint/view-sprint.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeSprintComponent } from './home-sprint/home-sprint.component';
import { DashboardSprintComponent } from './dashboard-sprint/dashboard-sprint.component';
export const SprintRoutes: Routes = [
  {
    title: 'Sprint Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Sprint', route: 'create', icon: 'add' },
        { label: 'View Sprints', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Sprint Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Sprint Management',
        path: 'home',
        loadComponent: () => HomeSprintComponent,
      },
      {
        title: 'Sprint Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardSprintComponent,
      },
      {
        title: 'New Sprint',
        path: 'create',
        loadComponent: () => CreateSprintComponent,
      },
      {
        title: 'View Sprints',
        path: 'view',
        loadComponent: () => ViewSprintComponent,
      },
      {
        title: 'Update Sprint',
        path: 'update/:id',
        loadComponent: () => UpdateSprintComponent,
      },
    ],
  },
];
