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
          route: 'category',
          label: 'Category',
          icon: 'category',
        },
        {
          route: 'supplier',
          label: 'Supplier',
          icon: 'box',
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
      ]),
    ],
    children: [
      SampleRoute,
      CategoryRoute,
      SupplierRoute,
      StoreRoute,
      PriceLevelRoute,
    ],
  },
];
