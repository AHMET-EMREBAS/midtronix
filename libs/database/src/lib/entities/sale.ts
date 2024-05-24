import { BaseEntity } from './__base';
import {
  Column,
  Entity,
  ManyRelation,
  OneRelation,
  ViewColumn,
  ViewEntity,
} from '@mdtx/core';
import { Order } from './order';
import { Cart } from './cart';
import { ISale, ISaleView } from '@mdtx/common';
import { User } from './user';
import { Customer } from './customer';
import { Store } from './store';

@Entity()
export class Sale
  extends BaseEntity
  implements ISale<Order, Cart, User, Customer, Store>
{
  @ManyRelation(Order, { eager: true }) orders!: Order[];
  @OneRelation(Cart) cart!: Cart;
  @OneRelation(User) user!: User;
  @OneRelation(Customer) customer!: Customer;
  @OneRelation(Store) store!: Store;

  @Column({ type: 'numeric', default: 0 }) taxrate!: number;
  @Column({ type: 'numeric', default: 0 }) cashPayment!: number;
  @Column({ type: 'numeric', default: 0 }) cardPayment!: number;
}

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'id')
      .addSelect('main.cartId', 'cartId')
      .addSelect('main.user', 'userId')
      .addSelect('main.customer', 'customerId')
      .addSelect('main.store', 'storeId')
      .addSelect('main.taxrate', 'taxrate')
      .addSelect('SUM(order.quantity)', 'quantity')
      .addSelect('SUM(order.saleSubtotal)', 'subtotal')
      .addSelect('SUM(order.saleTotal)', 'total')
      .from(Sale, 'main')
      .leftJoin('sale_orders_order', 'orders', 'main.id = orders.saleId')
      .leftJoin(Order, 'order', 'order.id = orders.orderId')
      .groupBy('main.id, main.cartId, order.saleSubtotal, order.saleTotal');
  },
})
export class SaleView implements ISaleView {
  @ViewColumn() id!: number;
  @ViewColumn() cartId!: number;
  @ViewColumn() userId!: number;
  @ViewColumn() customerId!: number;
  @ViewColumn() storeId!: number;
  @ViewColumn() quantity!: number;
  @ViewColumn() subtotal!: number;
  @ViewColumn() taxrate!: number;
  @ViewColumn() total!: number;
}
