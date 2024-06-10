import { Route } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftTopProvider,
} from '@mdtx/material/layout';
import {
  CategoryRoute,
  SampleRoute,
  SupplierRoute,
  StoreRoute,
  PriceLevelRoute,
  ProductRoute,
  ManufacturerRoute,
} from '@mdtx/resource-clients';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => AppLayoutComponent,
    providers: [
      SidenavLeftTopProvider.provide([
        {
          route: 'sample',
          label: 'Sample',
          icon: 'info',
        },
        {
          route: 'product',
          label: 'Product',
          icon: 'inventory',
        },
        {
          route: 'category',
          label: 'Category',
          icon: 'category',
        },
        {
          route: 'store',
          label: 'Store',
          icon: 'store',
        },
        {
          route: 'price-level',
          label: 'PriceLevel',
          icon: 'layers',
        },
        {
          route: 'supplier',
          label: 'Supplier',
          icon: 'box',
        },
        {
          route: 'manufacturer',
          label: 'Manufacturer',
          icon: 'factory',
        },
      ]),
    ],
    children: [
      SampleRoute,
      CategoryRoute,
      SupplierRoute,
      StoreRoute,
      PriceLevelRoute,
      ProductRoute,
      ManufacturerRoute,
    ],
  },
];
