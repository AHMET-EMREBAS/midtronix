/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftBottomProvider,
  SidenavLeftTopProvider,
} from '@mdtx/material/layout';
import { provideEntityData, withEffects } from '@ngrx/data';
import { InventoryComponent } from './inventory.component';
import {
  CategoryRoutes,
  DepartmentRoutes,
  ProductRoutes,
  ProductImageRoutes,
  ProductVideoRoutes,
  SkuRoutes,
  StoreRoutes,
  PriceLevelRoutes,
  PriceRoutes,
  QuantityRoutes,
} from '@mdtx/modules/sub-modules';

export const InventoryRoutes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    providers: [
      provideEntityData(
        {
          pluralNames: {
            Product: 'Products',
            Category: 'Categories',
            Department: 'Departments',
            Manufacturer: 'Manufacturers',
            ProductImage: 'ProductImages',
            ProductVideo: 'ProductVideos',
            Sku: 'Skus',
            SkuView: 'SkuViews',
            Store: 'Stores',
            PriceLevel: 'PriceLevels',
            Price: 'Prices',
            Quantity: 'Quantities',
          },
          entityMetadata: {
            Product: {},
            Category: {},
            Department: {},
            Manufacturer: {},
            ProductImage: {},
            ProductVideo: {},
            Sku: {},
            SkuView: {},
            Store: {},
            PriceLevel: {},
            Price: {},
            Quantity: {},
          },
        },
        withEffects()
      ),
    ],
    children: [
      {
        path: '',
        loadComponent: () => AppLayoutComponent,
        providers: [
          SidenavLeftTopProvider.provide([
            { label: 'Product', icon: 'inventory_2', route: 'product' },
            { label: 'Sku', icon: 'track_changes', route: 'sku' },
            { divider: true },
            { label: 'Price', icon: 'attach_money', route: 'price' },
            { label: 'Price Level', icon: 'groups_3', route: 'pricelevel' },
            { divider: true },
            { label: 'Quantity', icon: 'numbers', route: 'quantity' },
            { divider: true },
            { label: 'Category', icon: 'category', route: 'category' },
            { label: 'Department', icon: 'group_work', route: 'department' },
            { divider: true },
            { label: 'Store', icon: 'store', route: 'store' },
          ]),

          SidenavLeftBottomProvider.provide([
            { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
          ]),
        ],

        children: [
          { path: 'product', loadChildren: () => ProductRoutes },
          { path: 'category', loadChildren: () => CategoryRoutes },
          { path: 'department', loadChildren: () => DepartmentRoutes },
          { path: 'productimage', loadChildren: () => ProductImageRoutes },
          { path: 'productvideo', loadChildren: () => ProductVideoRoutes },
          { path: 'sku', loadChildren: () => SkuRoutes },
          { path: 'store', loadChildren: () => StoreRoutes },
          { path: 'pricelevel', loadChildren: () => PriceLevelRoutes },
          { path: 'price', loadChildren: () => PriceRoutes },
          { path: 'quantity', loadChildren: () => QuantityRoutes },
        ],
      },
    ],
  },
];
