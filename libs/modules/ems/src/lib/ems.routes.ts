/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftBottomProvider,
  SidenavLeftTopProvider,
} from '@mdtx/material/layout';
import { provideEntityData, withEffects } from '@ngrx/data';
import { EmsComponent } from './ems.component';
import {
  UserRoutes,
  RoleRoutes,
  PermissionRoutes,
  UserAddressRoutes,
  UserEmailRoutes,
  UserPhoneRoutes,
} from '@mdtx/modules/sub-modules';
export const EmsRoutes: Routes = [
  {
    path: '',
    component: EmsComponent,
    providers: [
      provideEntityData(
        {
          pluralNames: {
            User: 'Users',
            Role: 'Roles',
            Permission: 'Permissions',
            UserAddress: 'UserAddresses',
            UserEmail: 'UserEmails',
            UserPhone: 'UserPhones',
          },
          entityMetadata: {
            User: {},
            Role: {},
            Permission: {},
            UserAddress: {},
            UserEmail: {},
            UserPhone: {},
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
            { label: 'User', icon: 'person', route: 'user' },
            { label: 'Role', icon: 'badge', route: 'role' },
            { label: 'Permission', icon: 'security', route: 'permission' },
            { divider: true },

            { label: 'Address', icon: 'map', route: 'useraddress' },
            { label: 'Email', icon: 'email', route: 'useremail' },
            { label: 'Phone', icon: 'phone', route: 'userphone' },
          ]),

          SidenavLeftBottomProvider.provide([
            { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
          ]),
        ],

        children: [
          { path: 'user', loadChildren: () => UserRoutes },
          { path: 'role', loadChildren: () => RoleRoutes },
          { path: 'permission', loadChildren: () => PermissionRoutes },
          { path: 'useraddress', loadChildren: () => UserAddressRoutes },
          { path: 'useremail', loadChildren: () => UserEmailRoutes },
          { path: 'userphone', loadChildren: () => UserPhoneRoutes },
        ],
      },
    ],
  },
];
