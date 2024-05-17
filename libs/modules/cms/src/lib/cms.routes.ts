/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftBottomProvider,
  SidenavLeftTopProvider,
} from '@mdtx/material/layout';
import { provideEntityData, withEffects } from '@ngrx/data';
import { CmsComponent } from './cms.component';
import {
  CustomerRoutes,
  RoleRoutes,
  PermissionRoutes,
  CustomerAddressRoutes,
  CustomerEmailRoutes,
  CustomerPhoneRoutes,
} from '@mdtx/modules/sub-modules';

export const CmsRoutes: Routes = [
  {
    path: '',
    component: CmsComponent,
    providers: [
      provideEntityData(
        {
          pluralNames: {
            Customer: 'Customers',
            Role: 'Role',
            Permission: 'Permissions',
            CustomerAddress: 'CustomerAddresses',
            CustomerEmail: 'CustomerEmails',
            CustomerPhone: 'CustomerPhones',
          },
          entityMetadata: {
            Customer: {},
            Role: {},
            Permission: {},
            CustomerAddress: {},
            CustomerEmail: {},
            CustomerPhone: {},
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
            { label: 'Customer', icon: 'person', route: 'customer' },
            { label: 'Role', icon: 'badge', route: 'role' },
            { label: 'Permission', icon: 'security', route: 'permission' },
            { divider: true },

            { label: 'Address', icon: 'map', route: 'customeraddress' },
            { label: 'Email', icon: 'email', route: 'customeremail' },
            { label: 'Phone', icon: 'phone', route: 'customerphone' },
          ]),

          SidenavLeftBottomProvider.provide([
            { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
          ]),
        ],

        children: [
          { path: 'customer', loadChildren: () => CustomerRoutes },
          { path: 'role', loadChildren: () => RoleRoutes },
          { path: 'permission', loadChildren: () => PermissionRoutes },
          {
            path: 'customeraddress',
            loadChildren: () => CustomerAddressRoutes,
          },
          { path: 'customeremail', loadChildren: () => CustomerEmailRoutes },
          { path: 'customerphone', loadChildren: () => CustomerPhoneRoutes },
        ],
      },
    ],
  },
];
