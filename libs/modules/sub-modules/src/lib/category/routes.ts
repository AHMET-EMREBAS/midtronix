import { Routes } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { DashboardCategoryComponent } from './dashboard-category/dashboard-category.component';
export const CategoryRoutes: Routes = [
  {
    title: 'Category Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Category', route: 'create', icon: 'add' },
        { label: 'View Categorys', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Category Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Category Management',
        path: 'home',
        loadComponent: () => HomeCategoryComponent,
      },
      {
        title: 'Category Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardCategoryComponent,
      },
      {
        title: 'New Category',
        path: 'create',
        loadComponent: () => CreateCategoryComponent,
      },
      {
        title: 'View Categorys',
        path: 'view',
        loadComponent: () => ViewCategoryComponent,
      },
      {
        title: 'Update Category',
        path: 'update/:id',
        loadComponent: () => UpdateCategoryComponent,
      },
    ],
  },
];
