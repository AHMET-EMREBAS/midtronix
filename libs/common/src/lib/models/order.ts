import { IBaseEntity } from './__base';

export interface ICart<TCustomer, TUser> extends IBaseEntity {
  customer: TCustomer;
  user: TUser;
}

export interface IOrder<TSku, TCart> extends IBaseEntity {
  quantity: number;
  sku: TSku;
  cart: TCart;
}
