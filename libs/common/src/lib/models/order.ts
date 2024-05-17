/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID, IOwner } from './__base';
import { ICustomer } from './customer';
import { ISku } from './product';
import { IUser } from './user';

export interface ICart<TCustomer extends IID = IID, TUser extends IID = IID>
  extends IOwner<TCustomer> {
  user: TUser;
}

export interface IOrder<TSku extends IID, TCart extends IID>
  extends IBaseEntity {
  quantity: number;
  sku: TSku;
  cart: TCart;
}

export type ICartRaw = ICart<ICustomer, IUser>;
export type IOrderRaw = IOrder<ISku, ICart>;
