import { Routes } from '@angular/router';
import { CreateTaxrateComponent } from './create-taxrate/create-taxrate.component';
import { UpdateTaxrateComponent } from './update-taxrate/update-taxrate.component';
import { ViewTaxrateComponent } from './view-taxrate/view-taxrate.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeTaxrateComponent } from './home-taxrate/home-taxrate.component';
import { DashboardTaxrateComponent } from './dashboard-taxrate/dashboard-taxrate.component';
export const TaxrateRoutes: Routes = [
  {
    title: 'Taxrate Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Taxrate', route: 'create', icon: 'add' },
        { label: 'View Taxrates', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Taxrate Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Taxrate Management',
        path: 'home',
        loadComponent: () => HomeTaxrateComponent,
      },
      {
        title: 'Taxrate Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardTaxrateComponent,
      },
      {
        title: 'New Taxrate',
        path: 'create',
        loadComponent: () => CreateTaxrateComponent,
      },
      {
        title: 'View Taxrates',
        path: 'view',
        loadComponent: () => ViewTaxrateComponent,
      },
      {
        title: 'Update Taxrate',
        path: 'update/:id',
        loadComponent: () => UpdateTaxrateComponent,
      },
    ],
  },
];
