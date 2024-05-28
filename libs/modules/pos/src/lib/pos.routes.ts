/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftBottomProvider,
  SidenavLeftTopProvider,
} from '@mdtx/material/layout';

import { provideEntityData, withEffects } from '@ngrx/data';
import { PosComponent } from './pos/pos.component';
import { PosSettingComponent } from './pos-setting/pos-setting.component';

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
            User: 'Users',
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
            User: {},
          },
        },
        withEffects()
      ),

      // SidenavLeftTopProvider.provide([
      //   {
      //     label: 'Configure Pos',
      //     route: '/pos',
      //     icon: 'settings',
      //     color: 'primary',
      //   },
      // ]),

      SidenavLeftBottomProvider.provide([
        { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
      ]),
    ],

    children: [
      { path: '', loadComponent: () => PosComponent },
      { path: 'setting', loadComponent: () => PosSettingComponent },
    ],
  },
];
