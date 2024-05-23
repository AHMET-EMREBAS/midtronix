import { IBaseEntity, IID } from './__base';
import { ICart, IOrder } from './cart';

export interface ISale<TOrder extends IID = IID, TCart extends IID = IID>
  extends IBaseEntity {
  taxrate: number;
  orders: TOrder[];
  cart: TCart;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISaleRaw extends ISale<IOrder, ICart> {}

export interface ISaleView {
  id: number;
  cartId: number;
  userId: number;
  customerId: number;
  storeId: number;
  quantity: number;
  subtotal: number;
  taxrate: number;
  total: number;
}
