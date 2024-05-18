/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftBottomProvider,
} from '@mdtx/material/layout';
import { PosComponent } from './pos/pos.component';

import { provideEntityData, withEffects } from '@ngrx/data';

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
