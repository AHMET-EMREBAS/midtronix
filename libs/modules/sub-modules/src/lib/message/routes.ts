import { Routes } from '@angular/router';
import { CreateMessageComponent } from './create-message/create-message.component';
import { UpdateMessageComponent } from './update-message/update-message.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeMessageComponent } from './home-message/home-message.component';
import { DashboardMessageComponent } from './dashboard-message/dashboard-message.component';
export const MessageRoutes: Routes = [
  {
    title: 'Message Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Message', route: 'create', icon: 'add' },
        { label: 'View Messages', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Message Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Message Management',
        path: 'home',
        loadComponent: () => HomeMessageComponent,
      },
      {
        title: 'Message Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardMessageComponent,
      },
      {
        title: 'New Message',
        path: 'create',
        loadComponent: () => CreateMessageComponent,
      },
      {
        title: 'View Messages',
        path: 'view',
        loadComponent: () => ViewMessageComponent,
      },
      {
        title: 'Update Message',
        path: 'update/:id',
        loadComponent: () => UpdateMessageComponent,
      },
    ],
  },
];
