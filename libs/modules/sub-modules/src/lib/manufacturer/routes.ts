import { Routes } from '@angular/router';
import { CreateManufacturerComponent } from './create-manufacturer/create-manufacturer.component';
import { UpdateManufacturerComponent } from './update-manufacturer/update-manufacturer.component';
import { ViewManufacturerComponent } from './view-manufacturer/view-manufacturer.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeManufacturerComponent } from './home-manufacturer/home-manufacturer.component';
import { DashboardManufacturerComponent } from './dashboard-manufacturer/dashboard-manufacturer.component';
export const ManufacturerRoutes: Routes = [
  {
    title: 'Manufacturer Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Manufacturer', route: 'create', icon: 'add' },
        { label: 'View Manufacturers', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Manufacturer Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Manufacturer Management',
        path: 'home',
        loadComponent: () => HomeManufacturerComponent,
      },
      {
        title: 'Manufacturer Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardManufacturerComponent,
      },
      {
        title: 'New Manufacturer',
        path: 'create',
        loadComponent: () => CreateManufacturerComponent,
      },
      {
        title: 'View Manufacturers',
        path: 'view',
        loadComponent: () => ViewManufacturerComponent,
      },
      {
        title: 'Update Manufacturer',
        path: 'update/:id',
        loadComponent: () => UpdateManufacturerComponent,
      },
    ],
  },
];
