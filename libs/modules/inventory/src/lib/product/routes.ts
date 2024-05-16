import { Routes } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
export const ProductRoutes: Routes = [
  {
    title: 'Product Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { label: 'Create Product', route: 'create', icon: 'add' },
        { label: 'View Products', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Product Dashboard',
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        title: 'Product Dashboard',
        path: 'dashboard',
        loadComponent: () => ProductDashboardComponent,
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
        title: 'View Product',
        path: 'view/:id',
        loadComponent: () => ViewProductComponent,
      },
      {
        title: 'Update Product',
        path: 'update/:id',
        loadComponent: () => UpdateProductComponent,
      },
      {
        title: 'Delete Product',
        path: 'delete/:id',
        loadComponent: () => DeleteProductComponent,
      },
    ],
  },
];
