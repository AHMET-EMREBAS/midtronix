/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID, IOwner } from './__base';
import { ICustomer } from './customer';
import { ISku } from './product';
import { IUser } from './user';

/**
 * @param owner customer
 * @param user employee
 * @param store
 * @param note string
 * @param discountTotal number
 * @param subtotal number
 * @param total number
 */
export interface ICart<
  TCustomer extends IID = IID,
  TUser extends IID = IID,
  TStore extends IID = IID
> extends IOwner<TCustomer> {
  user: TUser;
  store: TStore;
  note?: string;
}

export interface ICartView {
  id: number;
  storeId: number;
  customerId: number;
  userId: number;
}

export interface IOrder<
  TSku extends IID = IID,
  TCart extends IID = IID,
  TPriceLevel extends IID = IID
> extends IBaseEntity {
  quantity: number;
  sku: TSku;
  cart: TCart;
  priceLevel: TPriceLevel;

  taxrate: number;
  salePrice: number;
  saleSubtotal: number;
  saleTotal: number;
}

export type ICartRaw = ICart<ICustomer, IUser>;
export type IOrderRaw = IOrder<ISku, ICart>;

export interface IOrderView {
  id: number;
  skuId: number;
  cartId: number;
  customerId: number;
  employeeId: number;
  priceLevelId: number;
  storeId: number;
  name: string;
  barcode: string;
  cost: number;
  fixedDiscount: number;
  percentDiscount: number;
  quantity: number;
  price: number;
  salePrice: number;
  taxrate: number;
  saleSubtotal: number;
  saleTotal: number;
}

export interface IOrderViewRaw extends IOrderView {}
