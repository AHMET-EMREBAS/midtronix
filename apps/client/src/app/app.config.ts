import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideMatFormFieldOptions } from '@mdtx/material/core';
import { httpInterceptors } from './app.interceptors';
import { provideEffects } from '@ngrx/effects';
import { provideEntityData, withEffects } from '@ngrx/data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors(httpInterceptors)),
    provideStore(),
    provideEffects([]),
    provideEntityData(
      {
        pluralNames: {
          Sample: 'Samples',

          Store: 'Stores',
          Product: 'Products',
          Category: 'Categories',
          Department: 'Departments',
          Supplier: 'Suppliers',
          Manufacturer: 'Manufacturer',
          Sku: 'Skus',
          Price: 'Prices',
          Quantity: 'Quantities',
          PriceLevel: 'PriceLevels',
          Order: 'Orders',
          Cart: 'Carts',

          User: 'Users',
          Role: 'Roles',
          Permission: 'Permissions',

          UserEmail: 'UserEmails',
          UserPhone: 'UserPhones',
          UserAddress: 'UserAddresss',

          Customer: 'Customers',
          CustomerRole: 'CustomerRoles',
          CustomerPermission: 'CustomerPermissions',

          CustomerEmail: 'CustomerEmails',
          CustomerPhone: 'CustomerPhones',
          CustomerAddress: 'CustomerAddresss',

          Project: 'Projects',
          Task: 'Tasks',
          Sprint: 'Sprints',

          Message: 'Messages',
          Notification: 'Notification',
        },
        entityMetadata: {
          Sample: {},

          Store: {},
          Product: {},
          Category: {},
          Department: {},
          Supplier: {},
          Manufacturer: {},
          Sku: {},
          Price: {},
          Quantity: {},
          PriceLevel: {},
          Order: {},
          Cart: {},

          User: {},
          Role: {},
          Permission: {},
          UserEmail: {},
          UserPhone: {},
          UserAddress: {},

          Customer: {},
          CustomerRole: {},
          CustomerPermission: {},
          CustomerEmail: {},
          CustomerPhone: {},
          CustomerAddress: {},

          Project: {},
          Task: {},
          Sprint: {},

          Message: {},
          Notification: {},
        },
      },
      withEffects()
    ),
    provideMatFormFieldOptions({ appearance: 'outline', color: 'primary' }),
    provideRouter(appRoutes, withHashLocation()),
    provideAnimationsAsync(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
