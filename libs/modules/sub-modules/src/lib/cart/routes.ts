import { Routes } from '@angular/router';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeCartComponent } from './home-cart/home-cart.component';
import { DashboardCartComponent } from './dashboard-cart/dashboard-cart.component';
export const CartRoutes: Routes = [
  {
    title: 'Cart Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Cart', route: 'create', icon: 'add' },
        { label: 'View Carts', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Cart Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Cart Management',
        path: 'home',
        loadComponent: () => HomeCartComponent,
      },
      {
        title: 'Cart Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardCartComponent,
      },
      {
        title: 'New Cart',
        path: 'create',
        loadComponent: () => CreateCartComponent,
      },
      {
        title: 'View Carts',
        path: 'view',
        loadComponent: () => ViewCartComponent,
      },
      {
        title: 'Update Cart',
        path: 'update/:id',
        loadComponent: () => UpdateCartComponent,
      },
    ],
  },
];
