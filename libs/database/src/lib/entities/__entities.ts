import { Cart } from './cart';
import { CartView } from './cart.view';
import {
  Customer,
  CustomerAddress,
  CustomerEmail,
  CustomerPermission,
  CustomerPhone,
  CustomerRole,
} from './customer';
import {
  Manufacturer,
  ManufacturerAddress,
  ManufacturerEmail,
  ManufacturerPhone,
} from './manufacturer';
import { Message, Notification } from './message';
import { Type } from '@mdtx/core';
import {
  Permission,
  Role,
  User,
  UserAddress,
  UserEmail,
  UserPhone,
} from './user';
import { Category, CustomerBadge, Department, UserBadge } from './meta';
import { Order } from './order';
import { OrderView } from './order.view';
import {
  Price,
  PriceLevel,
  Product,
  ProductImage,
  ProductVideo,
  Quantity,
  Sku,
} from './product';
import { Store } from './store';
import { Project, Sprint, Task } from './project';
import { Ticket } from './ticket';
import { Taxrate } from './taxrate';
import { Discount } from './discount';
import { SkuView } from './product.view';

export const UserEntities: Readonly<Type[]> = [
  User,
  Role,
  Permission,
  UserBadge,
];

export const UserPhoneEntities: Readonly<Type[]> = [...UserEntities, UserPhone];

export const UserEmailEntities: Readonly<Type[]> = [...UserEntities, UserEmail];

export const UserAddressEntities: Readonly<Type[]> = [
  ...UserEntities,
  UserAddress,
];

export const PermissionEntities: Readonly<Type[]> = [Permission];
export const RoleEntities: Readonly<Type[]> = [Role, Permission];

export const CartEntities = [Cart, CartView, User, Customer];

export const CustomerEntities: Readonly<Type[]> = [
  Customer,
  CustomerRole,
  CustomerPermission,
  CustomerBadge,
];

export const CustomerPhoneEntities: Readonly<Type[]> = [
  CustomerPhone,
  ...CustomerEntities,
];

export const CustomerEmailEntities: Readonly<Type[]> = [
  CustomerEmail,
  ...CustomerEntities,
];

export const CustomerAddressEntities: Readonly<Type[]> = [
  CustomerAddress,
  ...CustomerEntities,
];

export const CustomerRoleEntities: Readonly<Type[]> = [
  CustomerRole,
  CustomerPermission,
];

export const CustomerPermissionEntities: Readonly<Type[]> = [
  CustomerPermission,
];

export const ManufacturerEntities: Readonly<Type[]> = [Manufacturer];
export const ManufacturerAddressEntities: Readonly<Type[]> = [
  Manufacturer,
  ManufacturerAddress,
];
export const ManufacturerEmailEntities: Readonly<Type[]> = [
  Manufacturer,
  ManufacturerEmail,
];
export const ManufacturerPhoneEntities: Readonly<Type[]> = [
  Manufacturer,
  ManufacturerPhone,
];

export const ProductEntities: Readonly<Type[]> = [
  Product,
  Manufacturer,
  Category,
  Department,
];

export const MessageEntities: Readonly<Type[]> = [Message, ...UserEntities];

export const NotificationEntities: Readonly<Type[]> = [
  Notification,
  ...UserEntities,
];

export const CategoryEntities = [Category];

export const DepartmentEntities = [Department];

export const OrderEntities = [Order, OrderView, Sku, Cart];

export const SkuEntities: Readonly<Type[]> = [...ProductEntities, Sku];

export const PriceEntities: Readonly<Type[]> = [
  Sku,
  Price,
  PriceLevel,
  ...ProductEntities,
];

export const QuantityEntities: Readonly<Type[]> = [
  ...ProductEntities,
  Store,
  Sku,
  Quantity,
];

export const ProductImageEntities: Readonly<Type[]> = [
  ...ProductEntities,
  ProductImage,
];

export const ProductVideoEntities: Readonly<Type[]> = [
  ...ProductEntities,
  ProductVideo,
];

export const ProjectEntities: Readonly<Type[]> = [Project];
export const SprintEntities: Readonly<Type[]> = [Project, Sprint];
export const TaskEntities: Readonly<Type[]> = [
  Project,
  Sprint,
  Task,
  ...UserEntities,
];

export const StoreEntities: Readonly<Type[]> = [Store];

export const TaxrateEntities = [Taxrate];

export const TicketEntities: Readonly<Type[]> = [
  Ticket,
  ...CustomerEntities,
  ...UserEntities,
];

export const DiscountEntities = [Discount, ...SkuEntities];

export const OrderViewEntities = [
  Order,
  OrderView,
  Sku,
  Cart,
  PriceLevel,
  CartView,
  SkuView,
];
