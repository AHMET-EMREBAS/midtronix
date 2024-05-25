import { IBaseEntity, IID } from './__base';
import { ICart, IOrder } from './cart';

export interface ISale<
  TCart extends IID = IID,
  TUser extends IID = IID,
  TCustomer extends IID = IID,
  TStore extends IID = IID
> extends IBaseEntity {
  cart: TCart;
  employee: TUser;
  customer: TCustomer;
  store: TStore;
  accountBalancePayment: number;
  cashPayment: number;
  cardPayment: number;
  tax: number;
  subtotal: number;
  total: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISaleRaw extends ISale<IOrder, ICart> {}

export interface ISaleView {
  id: number;
  cartId: number;
  employeeId: number;
  customerId: number;
  storeId: number;

  accountBalancePayment: number;
  cashPayment: number;
  cardPayment: number;

  tax: number;
  subtotal: number;
  total: number;
}
