import { Routes } from '@angular/router';
import { CreateStoreComponent } from './create-store/create-store.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
import { ViewStoreComponent } from './view-store/view-store.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeStoreComponent } from './home-store/home-store.component';
import { DashboardStoreComponent } from './dashboard-store/dashboard-store.component';
export const StoreRoutes: Routes = [
  {
    title: 'Store Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Store', route: 'create', icon: 'add' },
        { label: 'View Stores', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Store Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Store Management',
        path: 'home',
        loadComponent: () => HomeStoreComponent,
      },
      {
        title: 'Store Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardStoreComponent,
      },
      {
        title: 'New Store',
        path: 'create',
        loadComponent: () => CreateStoreComponent,
      },
      {
        title: 'View Stores',
        path: 'view',
        loadComponent: () => ViewStoreComponent,
      },
      {
        title: 'Update Store',
        path: 'update/:id',
        loadComponent: () => UpdateStoreComponent,
      },
    ],
  },
];
