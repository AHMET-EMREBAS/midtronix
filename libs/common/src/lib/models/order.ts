/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID, IOwner } from './__base';

export interface ICart<TCustomer extends IID, TUser extends IID>
  extends IOwner<TCustomer> {
  user: TUser;
}

export interface IOrder<TSku extends IID, TCart extends IID>
  extends IBaseEntity {
  quantity: number;
  sku: TSku;
  cart: TCart;
}
