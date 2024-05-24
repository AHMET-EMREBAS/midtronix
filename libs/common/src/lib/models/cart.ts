/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
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
> extends IBaseEntity {
  employee: TUser;
  customer: TCustomer;
  store: TStore;
  note?: string;
  checkout?: boolean;
}

/**
 * @param id
 * @param storeId
 * @param customerId
 * @param employeeId
 */
export interface ICartView {
  id: number;
  storeId: number;
  customerId: number;
  employeeId: number;
}

/**
 * @param sku
 * @param cart
 * @param quantity
 * @param unitPrice
 * @param subtotal
 * @param total
 */
export interface IOrder<TSku extends IID = IID, TCart extends IID = IID>
  extends IBaseEntity {
  sku: TSku;
  cart: TCart;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  total: number;
}

export type ICartRaw = ICart<ICustomer, IUser>;

export type IOrderRaw = IOrder<ISku, ICart>;

/**
 * @param id
 * @param skuId
 * @param cartId
 * @param name
 * @param barcode
 * @param quantity
 * @param unitPrice
 * @param subtotal
 * @param total
 */
export interface IOrderView {
  id: number;
  skuId: number;
  cartId: number;
  name: string;
  barcode: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  total: number;
}

export interface IOrderViewRaw extends IOrderView {}
