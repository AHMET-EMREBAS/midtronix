import { Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeProjectComponent } from './home-project/home-project.component';
import { DashboardProjectComponent } from './dashboard-project/dashboard-project.component';
export const ProjectRoutes: Routes = [
  {
    title: 'Project Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Project', route: 'create', icon: 'add' },
        { label: 'View Projects', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Project Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Project Management',
        path: 'home',
        loadComponent: () => HomeProjectComponent,
      },
      {
        title: 'Project Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardProjectComponent,
      },
      {
        title: 'New Project',
        path: 'create',
        loadComponent: () => CreateProjectComponent,
      },
      {
        title: 'View Projects',
        path: 'view',
        loadComponent: () => ViewProjectComponent,
      },
      {
        title: 'Update Project',
        path: 'update/:id',
        loadComponent: () => UpdateProjectComponent,
      },
    ],
  },
];
