import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ContentCenterLeftProvider } from '@mdtx/material/layout';

export const ProductRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Add', route: 'create', icon: 'add' },
        { label: 'Delete', route: 'delete', icon: 'delete' },
        { label: 'Dashboard', route: 'dashbaord', icon: 'dashboard' },
      ]),
    ],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => ProductDashboardComponent },
      { path: 'create', loadComponent: () => CreateProductComponent },
      { path: 'view', loadComponent: () => ViewProductsComponent },
      { path: 'view/:id', loadComponent: () => ViewProductComponent },
      { path: 'update/:id', loadComponent: () => UpdateProductComponent },
      { path: 'delete/:id', loadComponent: () => DeleteProductComponent },
    ],
  },
];
