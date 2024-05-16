import { Routes } from '@angular/router';
import { CreateProductImageComponent } from './create-product-image/create-product-image.component';
import { UpdateProductImageComponent } from './update-product-image/update-product-image.component';
import { ViewProductImageComponent } from './view-product-image/view-product-image.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeProductImageComponent } from './home-product-image/home-product-image.component';
import { DashboardProductImageComponent } from './dashboard-product-image/dashboard-product-image.component';
export const ProductImageRoutes: Routes = [
  {
    title: 'ProductImage Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create ProductImage', route: 'create', icon: 'add' },
        { label: 'View ProductImages', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'ProductImage Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'ProductImage Management',
        path: 'home',
        loadComponent: () => HomeProductImageComponent,
      },
      {
        title: 'ProductImage Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardProductImageComponent,
      },
      {
        title: 'New ProductImage',
        path: 'create',
        loadComponent: () => CreateProductImageComponent,
      },
      {
        title: 'View ProductImages',
        path: 'view',
        loadComponent: () => ViewProductImageComponent,
      },
      {
        title: 'Update ProductImage',
        path: 'update/:id',
        loadComponent: () => UpdateProductImageComponent,
      },
    ],
  },
];
