import { Routes } from '@angular/router';
import { CreateUserEmailComponent } from './create-user-email/create-user-email.component';
import { UpdateUserEmailComponent } from './update-user-email/update-user-email.component';
import { ViewUserEmailComponent } from './view-user-email/view-user-email.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeUserEmailComponent } from './home-user-email/home-user-email.component';
import { DashboardUserEmailComponent } from './dashboard-user-email/dashboard-user-email.component';
export const UserEmailRoutes: Routes = [
  {
    title: 'UserEmail Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create UserEmail', route: 'create', icon: 'add' },
        { label: 'View UserEmails', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'UserEmail Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'UserEmail Management',
        path: 'home',
        loadComponent: () => HomeUserEmailComponent,
      },
      {
        title: 'UserEmail Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardUserEmailComponent,
      },
      {
        title: 'New UserEmail',
        path: 'create',
        loadComponent: () => CreateUserEmailComponent,
      },
      {
        title: 'View UserEmails',
        path: 'view',
        loadComponent: () => ViewUserEmailComponent,
      },
      {
        title: 'Update UserEmail',
        path: 'update/:id',
        loadComponent: () => UpdateUserEmailComponent,
      },
    ],
  },
];
