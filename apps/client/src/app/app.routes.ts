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
  RoleRoute,
  EmailRoute,
  PhoneRoute,
  UserRoute,
  CustomerRoute,
  PermissionRoute,
  AddressRoute,
  DepartmentRoute,
} from '@mdtx/resource-clients';
import { LoginComponent } from '@mdtx/material/auth';
export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => AppLayoutComponent,
    providers: [
      SidenavLeftTopProvider.provide([
        {
          route: 'product',
          label: 'Product',
          icon: 'inventory',
        },

        { divider: true },
        {
          route: 'category',
          label: 'Category',
          icon: 'category',
        },

        {
          route: 'department',
          label: 'Department',
          icon: 'category',
        },

        { divider: true },

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

        {
          divider: true,
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
          divider: true,
        },
        { route: 'user', label: 'User', icon: 'security' },
        { route: 'role', label: 'Role', icon: 'badge' },
        { route: 'permission', label: 'Permission', icon: 'policy' },

        { divider: true },

        { route: 'address', label: 'Address', icon: 'map' },
        { route: 'email', label: 'Email', icon: 'email' },
        { route: 'phone', label: 'Phone', icon: 'phone' },
        { divider: true },

        { route: 'customer', label: 'Customer', icon: 'groups' },
      ]),
    ],
    children: [
      {
        path: 'auth',
        children: [{ path: 'login', loadComponent: () => LoginComponent }],
      },
      ProductRoute,
      CategoryRoute,
      DepartmentRoute,
      //
      SupplierRoute,
      ManufacturerRoute,
      //
      StoreRoute,
      PriceLevelRoute,
      //
      UserRoute,
      RoleRoute,
      PermissionRoute,

      //
      AddressRoute,
      EmailRoute,
      PhoneRoute,
      //
      CustomerRoute,
    ],
  },
];
