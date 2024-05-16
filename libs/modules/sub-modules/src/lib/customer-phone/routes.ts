import { Routes } from '@angular/router';
import { CreateCustomerPhoneComponent } from './create-customer-phone/create-customer-phone.component';
import { UpdateCustomerPhoneComponent } from './update-customer-phone/update-customer-phone.component';
import { ViewCustomerPhoneComponent } from './view-customer-phone/view-customer-phone.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeCustomerPhoneComponent } from './home-customer-phone/home-customer-phone.component';
import { DashboardCustomerPhoneComponent } from './dashboard-customer-phone/dashboard-customer-phone.component';
export const CustomerPhoneRoutes: Routes = [
  {
    title: 'CustomerPhone Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create CustomerPhone', route: 'create', icon: 'add' },
        { label: 'View CustomerPhones', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'CustomerPhone Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'CustomerPhone Management',
        path: 'home',
        loadComponent: () => HomeCustomerPhoneComponent,
      },
      {
        title: 'CustomerPhone Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardCustomerPhoneComponent,
      },
      {
        title: 'New CustomerPhone',
        path: 'create',
        loadComponent: () => CreateCustomerPhoneComponent,
      },
      {
        title: 'View CustomerPhones',
        path: 'view',
        loadComponent: () => ViewCustomerPhoneComponent,
      },
      {
        title: 'Update CustomerPhone',
        path: 'update/:id',
        loadComponent: () => UpdateCustomerPhoneComponent,
      },
    ],
  },
];
