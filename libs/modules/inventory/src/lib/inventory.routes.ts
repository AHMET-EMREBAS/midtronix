/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  ContentCenterLeftProvider,
  SidenavLeftBottomProvider,
  SidenavLeftCenterProvider,
  SidenavLeftTopProvider,
} from '@mdtx/material/layout';
import { ProductRoutes } from './product';

export const InventoryRoutes: Routes = [
  {
    title: 'Inventory Management',
    path: '',
    loadComponent: () => AppLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Add', route: 'create', icon: 'add' },
        { label: 'Delete', route: 'delete', icon: 'delete' },
        { label: 'Dashboard', route: 'dashbaord', icon: 'dashboard' },
      ]),
      SidenavLeftTopProvider.provide([
        { label: 'Product', icon: 'inventory_2', route: 'product' },
        { label: 'Sku', icon: 'track_changes', route: 'sku' },
        { divider: true },
        { label: 'Price', icon: 'attach_money', route: 'price' },
        { label: 'Price Level', icon: 'groups_3', route: 'price-level' },
        { divider: true },
        { label: 'Quantity', icon: 'numbers', route: 'quantity' },
        { divider: true },
        { label: 'Category', icon: 'category', route: 'category' },
        { label: 'Department', icon: 'group_work', route: 'department' },
        { divider: true },
        { label: 'Store', icon: 'store', route: 'store' },
      ]),

      SidenavLeftCenterProvider.provide([]),

      SidenavLeftBottomProvider.provide([
        { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
      ]),
    ],

    children: [{ path: 'product', loadChildren: () => ProductRoutes }],
  },
];
