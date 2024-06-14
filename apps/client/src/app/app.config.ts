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
          Product: 'Products',
          ProductView: 'ProductViews',

          Sku: 'Skus',
          SkuView: 'SkuViews',

          Price: 'Prices',
          PriceView: 'PriceViews',

          Quantity: 'Quantities',
          QuantityView: 'QuantityViews',

          Order: 'Orders',
          OrderView: 'OrderViews',

          Cart: 'Carts',
          CartView: 'CartViews',
          //
          //VViewiew
          Store: 'Stores',
          StoreView: 'StoreViews',
          //
          //VViewiew
          PriceLevel: 'PriceLevels',
          PriceLevelView: 'PriceLevelViews',

          Category: 'Categories',
          CategoryView: 'CategoryViews',

          Department: 'Departments',
          DepartmentView: 'DepartmentViews',
          //
          //VViewiew
          Supplier: 'Suppliers',
          SupplierView: 'SupplierViews',

          Manufacturer: 'Manufacturers',
          ManufacturerView: 'ManufacturerViews',
          //
          //VViewiew
          User: 'Users',
          UserView: 'UserViews',

          Role: 'Roles',
          RoleView: 'RoleViews',

          Permission: 'Permissions',
          PermissionView: 'PermissionViews',
          //
          //VViewiew
          Email: 'Emails',
          EmailView: 'EmailViews',

          Phone: 'Phones',
          PhoneView: 'PhoneViews',

          Address: 'Addresses',
          AddressView: 'AddressViews',
          //
          //VViewiew
          Customer: 'Customers',
          CustomerView: 'CustomerViews',

          CustomerRole: 'CustomerRoles',
          CustomerRoleView: 'CustomerRoleViews',

          CustomerPermission: 'CustomerPermissions',
          CustomerPermissionView: 'CustomerPermissionViews',
          //
          //VViewiew
          CustomerEmail: 'CustomerEmails',
          CustomerEmailView: 'CustomerEmailViews',

          CustomerPhone: 'CustomerPhones',
          CustomerPhoneView: 'CustomerPhoneViews',

          CustomerAddress: 'CustomerAddresss',
          CustomerAddressView: 'CustomerAddressViews',
          //
          //VViewiew
          Project: 'Projects',
          ProjectView: 'ProjectViews',
          Task: 'Tasks',
          TaskView: 'TaskViews',
          Sprint: 'Sprints',
          SprintView: 'SprintViews',
          //
          //VViewiew
          Message: 'Messages',
          MessageView: 'MessageViews',
          Notification: 'Notifications',
          NotificationView: 'NotificationViews',

          //
          SerialNumber: 'SerialNumbers',
          SerialNumberView: 'SerialNumberViews',

          // 
          
        },
        entityMetadata: {
          Product: {},
          ProductView: {},
          Sku: {},
          SkuView: {},
          Price: {},
          PriceView: {},
          Quantity: {},
          QuantityView: {},
          Order: {},
          OrderView: {},
          Cart: {},
          CartView: {},
          //:{},
          //:{},View
          Store: {},
          StoreView: {},
          //:{},
          //:{},View
          PriceLevel: {},
          PriceLevelView: {},
          Category: {},
          CategoryView: {},
          Department: {},
          DepartmentView: {},
          //:{},
          //:{},View
          Supplier: {},
          SupplierView: {},
          Manufacturer: {},
          ManufacturerView: {},
          //:{},
          //:{},View
          User: {},
          UserView: {},
          Role: {},
          RoleView: {},
          Permission: {},
          PermissionView: {},
          //:{},
          //:{},View
          Email: {},
          EmailView: {},
          Phone: {},
          PhoneView: {},
          Address: {},
          AddressView: {},
          //:{},
          //:{},View
          Customer: {},
          CustomerView: {},
          CustomerRole: {},
          CustomerRoleView: {},
          CustomerPermission: {},
          CustomerPermissionView: {},
          //:{},
          //:{},View
          CustomerEmail: {},
          CustomerEmailView: {},
          CustomerPhone: {},
          CustomerPhoneView: {},
          CustomerAddress: {},
          CustomerAddressView: {},
          //:{},
          //:{},View
          Project: {},
          ProjectView: {},
          Task: {},
          TaskView: {},
          Sprint: {},
          SprintView: {},
          //:{},
          //:{},View
          Message: {},
          MessageView: {},
          Notification: {},
          NotificationView: {},

          //

          SerialNumber: {},
          SerialNumberView: {},
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
