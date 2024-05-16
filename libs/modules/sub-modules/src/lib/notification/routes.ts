import { Routes } from '@angular/router';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { UpdateNotificationComponent } from './update-notification/update-notification.component';
import { ViewNotificationComponent } from './view-notification/view-notification.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeNotificationComponent } from './home-notification/home-notification.component';
import { DashboardNotificationComponent } from './dashboard-notification/dashboard-notification.component';
export const NotificationRoutes: Routes = [
  {
    title: 'Notification Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Notification', route: 'create', icon: 'add' },
        { label: 'View Notifications', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Notification Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Notification Management',
        path: 'home',
        loadComponent: () => HomeNotificationComponent,
      },
      {
        title: 'Notification Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardNotificationComponent,
      },
      {
        title: 'New Notification',
        path: 'create',
        loadComponent: () => CreateNotificationComponent,
      },
      {
        title: 'View Notifications',
        path: 'view',
        loadComponent: () => ViewNotificationComponent,
      },
      {
        title: 'Update Notification',
        path: 'update/:id',
        loadComponent: () => UpdateNotificationComponent,
      },
    ],
  },
];
