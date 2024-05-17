/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftBottomProvider,
  SidenavLeftTopProvider,
} from '@mdtx/material/layout';
import { provideEntityData, withEffects } from '@ngrx/data';
import { InventoryComponent } from './inventory.component';
import {
  CategoryRoutes,
  DepartmentRoutes,
  ProductRoutes,
  CustomerAddressRoutes,
  CustomerEmailRoutes,
  CustomerPhoneRoutes,
  CustomerRoutes,
  ManufacturerRoutes,
  MessageRoutes,
  NotificationRoutes,
  PermissionRoutes,
  ProductImageRoutes,
  ProductVideoRoutes,
  ProjectRoutes,
  RoleRoutes,
  SkuRoutes,
  SprintRoutes,
  StoreRoutes,
  TaskRoutes,
  TicketRoutes,
  UserAddressRoutes,
  UserEmailRoutes,
  UserPhoneRoutes,
  UserRoutes,
  PriceLevelRoutes,
  PriceRoutes,
  QuantityRoutes,
} from '@mdtx/modules/sub-modules';
export const InventoryRoutes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    providers: [
      provideEntityData(
        {
          pluralNames: {
            Product: 'Products',
            Category: 'Categories',
            Department: 'Departments',
            CustomerAddress: 'CustomerAddresss',
            CustomerEmail: 'CustomerEmails',
            CustomerPhone: 'CustomerPhones',
            Customer: 'Customers',
            Manufacturer: 'Manufacturers',
            Message: 'Messages',
            Notification: 'Notifications',
            Permission: 'Permissions',
            ProductImage: 'ProductImages',
            ProductVideo: 'ProductVideos',
            Project: 'Projects',
            Role: 'Roles',
            Sku: 'Skus',
            Sprint: 'Sprints',
            Store: 'Stores',
            Task: 'Tasks',
            Ticket: 'Tickets',
            UserAddress: 'UserAddresss',
            UserEmail: 'UserEmails',
            UserPhone: 'UserPhones',
            User: 'Users',

            PriceLevel: 'PriceLevels',
            Price: 'Prices',
            Quantity: 'Quantities',
          },
          entityMetadata: {
            Product: {},
            Category: {},
            Department: {},
            CustomerAddress: {},
            CustomerEmail: {},
            CustomerPhone: {},
            Customer: {},
            Manufacturer: {},
            Message: {},
            Notification: {},
            Permission: {},
            ProductImage: {},
            ProductVideo: {},
            Project: {},
            Role: {},
            Sku: {},
            Sprint: {},
            Store: {},
            Task: {},
            Ticket: {},
            UserAddress: {},
            UserEmail: {},
            UserPhone: {},
            User: {},
            PriceLevel: {},
            Price: {},
            Quantity: {},
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
            { label: 'Product', icon: 'inventory_2', route: 'product' },
            { label: 'Sku', icon: 'track_changes', route: 'sku' },
            { divider: true },
            { label: 'Price', icon: 'attach_money', route: 'price' },
            { label: 'Price Level', icon: 'groups_3', route: 'pricelevel' },
            { divider: true },
            { label: 'Quantity', icon: 'numbers', route: 'quantity' },
            { divider: true },
            { label: 'Category', icon: 'category', route: 'category' },
            { label: 'Department', icon: 'group_work', route: 'department' },
            { divider: true },
            { label: 'Store', icon: 'store', route: 'store' },
          ]),

          SidenavLeftBottomProvider.provide([
            { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
          ]),
        ],

        children: [
          { path: 'product', loadChildren: () => ProductRoutes },
          { path: 'category', loadChildren: () => CategoryRoutes },
          { path: 'department', loadChildren: () => DepartmentRoutes },

          {
            path: 'customeraddress',
            loadChildren: () => CustomerAddressRoutes,
          },
          { path: 'customeremail', loadChildren: () => CustomerEmailRoutes },
          { path: 'customerphone', loadChildren: () => CustomerPhoneRoutes },
          { path: 'customer', loadChildren: () => CustomerRoutes },
          { path: 'manufacturer', loadChildren: () => ManufacturerRoutes },
          { path: 'message', loadChildren: () => MessageRoutes },
          { path: 'notification', loadChildren: () => NotificationRoutes },
          { path: 'permission', loadChildren: () => PermissionRoutes },
          { path: 'productimage', loadChildren: () => ProductImageRoutes },
          { path: 'productvideo', loadChildren: () => ProductVideoRoutes },
          { path: 'project', loadChildren: () => ProjectRoutes },
          { path: 'role', loadChildren: () => RoleRoutes },
          { path: 'sku', loadChildren: () => SkuRoutes },
          { path: 'sprint', loadChildren: () => SprintRoutes },
          { path: 'store', loadChildren: () => StoreRoutes },
          { path: 'task', loadChildren: () => TaskRoutes },
          { path: 'ticket', loadChildren: () => TicketRoutes },
          { path: 'useraddress', loadChildren: () => UserAddressRoutes },
          { path: 'useremail', loadChildren: () => UserEmailRoutes },
          { path: 'userphone', loadChildren: () => UserPhoneRoutes },
          { path: 'user', loadChildren: () => UserRoutes },
          { path: 'pricelevel', loadChildren: () => PriceLevelRoutes },
          { path: 'price', loadChildren: () => PriceRoutes },
          { path: 'quantity', loadChildren: () => QuantityRoutes },
          
        ],
      },
    ],
  },
];
