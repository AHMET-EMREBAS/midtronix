/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import { ICart, IOrder } from './cart';

export interface ICreateOrderDto
  extends Omit<IOrder<IID, IID>, keyof IBaseEntity | 'total' | 'subtotal'> {}

export interface ICreateCartDto
  extends Pick<ICart, 'note' | 'customer' | 'store'> {}
