import { Routes } from '@angular/router';
import { CreateProductVideoComponent } from './create-product-video/create-product-video.component';
import { UpdateProductVideoComponent } from './update-product-video/update-product-video.component';
import { ViewProductVideoComponent } from './view-product-video/view-product-video.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeProductVideoComponent } from './home-product-video/home-product-video.component';
import { DashboardProductVideoComponent } from './dashboard-product-video/dashboard-product-video.component';
export const ProductVideoRoutes: Routes = [
  {
    title: 'ProductVideo Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create ProductVideo', route: 'create', icon: 'add' },
        { label: 'View ProductVideos', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'ProductVideo Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'ProductVideo Management',
        path: 'home',
        loadComponent: () => HomeProductVideoComponent,
      },
      {
        title: 'ProductVideo Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardProductVideoComponent,
      },
      {
        title: 'New ProductVideo',
        path: 'create',
        loadComponent: () => CreateProductVideoComponent,
      },
      {
        title: 'View ProductVideos',
        path: 'view',
        loadComponent: () => ViewProductVideoComponent,
      },
      {
        title: 'Update ProductVideo',
        path: 'update/:id',
        loadComponent: () => UpdateProductVideoComponent,
      },
    ],
  },
];
