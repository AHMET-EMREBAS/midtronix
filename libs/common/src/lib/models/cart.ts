/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID, IOwner } from './__base';
import { ICustomer } from './customer';
import { ISku } from './product';
import { IUser } from './user';

export interface ICart<
  TCustomer extends IID = IID,
  TUser extends IID = IID,
  TStore extends IID = IID
> extends IOwner<TCustomer> {
  user: TUser;
  store: TStore;
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
}

export type ICartRaw = ICart<ICustomer, IUser>;
export type IOrderRaw = IOrder<ISku, ICart>;

export interface IOrderView {
  id: number;
  orderId: number;
  skuId: number;
  cartId: number;
  priceLevelId: number;
  storeId: number;
  name: string;
  barcode: string;
  quantity: number;
  price: number;
  cost: number;
}
