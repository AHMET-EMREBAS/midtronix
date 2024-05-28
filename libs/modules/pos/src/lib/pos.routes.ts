/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftBottomProvider,
} from '@mdtx/material/layout';

import { provideEntityData, withEffects } from '@ngrx/data';
import { PosComponent } from './pos/pos.component';

export const PosRoutes: Routes = [
  {
    title: 'Point Of Sale',
    path: '',
    loadComponent: () => AppLayoutComponent,
    providers: [
      provideEntityData(
        {
          pluralNames: {
            Product: 'Products',
            Sku: 'Skus',
            Price: 'Prices',
            PriceLevel: 'PriceLevels',
            Store: 'Stores',
            Quantity: 'Quantities',
            SkuView: 'SkuViews',
            Cart: 'Carts',
            Order: 'Orders',
            OrderView: 'OrderViews',
            Sale: 'Sales',
            SaleView: 'SaleViews',
            Customer: 'Customers',
            Discount: 'Discount',
            DiscountView: 'DiscountViews',
          },
          entityMetadata: {
            Sku: {},
            SkuView: {},
            Product: {},
            Price: {},
            PriceLevel: {},
            Store: {},
            Quantity: {},
            Cart: {},
            Order: {},
            OrderView: {},
            Sale: {},
            SaleView: {},
            Customer: {},
            Discount: {},
            DiscountView: {},
          },
        },
        withEffects()
      ),

      SidenavLeftBottomProvider.provide([
        { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
      ]),
    ],

    children: [{ path: '', loadComponent: () => PosComponent }],
  },
];
