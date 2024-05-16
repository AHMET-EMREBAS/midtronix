import { Routes } from '@angular/router';
import { CreatePriceLevelComponent } from './create-price-level/create-price-level.component';
import { UpdatePriceLevelComponent } from './update-price-level/update-price-level.component';
import { ViewPriceLevelComponent } from './view-price-level/view-price-level.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomePriceLevelComponent } from './home-price-level/home-price-level.component';
import { DashboardPriceLevelComponent } from './dashboard-price-level/dashboard-price-level.component';
export const PriceLevelRoutes: Routes = [
  {
    title: 'PriceLevel Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create PriceLevel', route: 'create', icon: 'add' },
        { label: 'View PriceLevels', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'PriceLevel Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'PriceLevel Management',
        path: 'home',
        loadComponent: () => HomePriceLevelComponent,
      },
      {
        title: 'PriceLevel Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardPriceLevelComponent,
      },
      {
        title: 'New PriceLevel',
        path: 'create',
        loadComponent: () => CreatePriceLevelComponent,
      },
      {
        title: 'View PriceLevels',
        path: 'view',
        loadComponent: () => ViewPriceLevelComponent,
      },
      {
        title: 'Update PriceLevel',
        path: 'update/:id',
        loadComponent: () => UpdatePriceLevelComponent,
      },
    ],
  },
];
