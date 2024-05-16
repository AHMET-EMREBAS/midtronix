import { Routes } from '@angular/router';
import { CreateUserPhoneComponent } from './create-user-phone/create-user-phone.component';
import { UpdateUserPhoneComponent } from './update-user-phone/update-user-phone.component';
import { ViewUserPhoneComponent } from './view-user-phone/view-user-phone.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeUserPhoneComponent } from './home-user-phone/home-user-phone.component';
import { DashboardUserPhoneComponent } from './dashboard-user-phone/dashboard-user-phone.component';
export const UserPhoneRoutes: Routes = [
  {
    title: 'UserPhone Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create UserPhone', route: 'create', icon: 'add' },
        { label: 'View UserPhones', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'UserPhone Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'UserPhone Management',
        path: 'home',
        loadComponent: () => HomeUserPhoneComponent,
      },
      {
        title: 'UserPhone Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardUserPhoneComponent,
      },
      {
        title: 'New UserPhone',
        path: 'create',
        loadComponent: () => CreateUserPhoneComponent,
      },
      {
        title: 'View UserPhones',
        path: 'view',
        loadComponent: () => ViewUserPhoneComponent,
      },
      {
        title: 'Update UserPhone',
        path: 'update/:id',
        loadComponent: () => UpdateUserPhoneComponent,
      },
    ],
  },
];
