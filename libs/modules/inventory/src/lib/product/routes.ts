import { Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeProductComponent } from './home-product/home-product.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
export const ProductRoutes: Routes = [
  {
    title: 'Product Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Product', route: 'create', icon: 'add' },
        { label: 'View Products', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Product Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Product Management',
        path: 'home',
        loadComponent: () => HomeProductComponent,
      },
      {
        title: 'Product Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardProductComponent,
      },
      {
        title: 'New Product',
        path: 'create',
        loadComponent: () => CreateProductComponent,
      },
      {
        title: 'View Products',
        path: 'view',
        loadComponent: () => ViewProductsComponent,
      },
      {
        title: 'Update Product',
        path: 'update/:id',
        loadComponent: () => UpdateProductComponent,
      },
    ],
  },
];
