import { Routes } from '@angular/router';
import { CreateCustomerEmailComponent } from './create-customer-email/create-customer-email.component';
import { UpdateCustomerEmailComponent } from './update-customer-email/update-customer-email.component';
import { ViewCustomerEmailComponent } from './view-customer-email/view-customer-email.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeCustomerEmailComponent } from './home-customer-email/home-customer-email.component';
import { DashboardCustomerEmailComponent } from './dashboard-customer-email/dashboard-customer-email.component';
export const CustomerEmailRoutes: Routes = [
  {
    title: 'CustomerEmail Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create CustomerEmail', route: 'create', icon: 'add' },
        { label: 'View CustomerEmails', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'CustomerEmail Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'CustomerEmail Management',
        path: 'home',
        loadComponent: () => HomeCustomerEmailComponent,
      },
      {
        title: 'CustomerEmail Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardCustomerEmailComponent,
      },
      {
        title: 'New CustomerEmail',
        path: 'create',
        loadComponent: () => CreateCustomerEmailComponent,
      },
      {
        title: 'View CustomerEmails',
        path: 'view',
        loadComponent: () => ViewCustomerEmailComponent,
      },
      {
        title: 'Update CustomerEmail',
        path: 'update/:id',
        loadComponent: () => UpdateCustomerEmailComponent,
      },
    ],
  },
];
