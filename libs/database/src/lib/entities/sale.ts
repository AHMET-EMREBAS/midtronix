import { BaseEntity } from './__base';
import {
  Column,
  Entity,
  OneRelation,
  ViewColumn,
  ViewEntity,
} from '@mdtx/core';
import { Cart } from './cart';
import { ISale, ISaleView } from '@mdtx/common';
import { User } from './user';
import { Customer } from './customer';
import { Store } from './store';

@Entity()
export class Sale
  extends BaseEntity
  implements ISale<Cart, User, Customer, Store>
{
  @OneRelation(Cart) cart!: Cart;
  @OneRelation(User) employee!: User;
  @OneRelation(Customer) customer!: Customer;
  @OneRelation(Store) store!: Store;

  @Column({ type: 'numeric', precision: 2 }) accountBalancePayment!: number;
  @Column({ type: 'numeric', precision: 2 }) cashPayment!: number;
  @Column({ type: 'numeric', precision: 2 }) cardPayment!: number;
  @Column({ type: 'numeric', precision: 2 }) tax!: number;
  @Column({ type: 'numeric', precision: 2 }) subtotal!: number;
  @Column({ type: 'numeric', precision: 2 }) total!: number;
}

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'id')
      .addSelect('main.cartId', 'cartId')
      .addSelect('main.employeeId', 'employeeId')
      .addSelect('main.customerId', 'customerId')
      .addSelect('main.storeId', 'storeId')
      .addSelect('main.accountBalancePayment', 'accountBalancePayment')
      .addSelect('main.cashPayment', 'cashPayment')
      .addSelect('main.cardPayment', 'cardPayment')
      .addSelect('main.tax', 'tax')
      .addSelect('main.subtotal', 'subtotal')
      .addSelect('main.total', 'total')
      .from(Sale, 'main');
  },
})
export class SaleView implements ISaleView {
  @ViewColumn() id!: number;
  @ViewColumn() cartId!: number;
  @ViewColumn() employeeId!: number;
  @ViewColumn() customerId!: number;
  @ViewColumn() storeId!: number;
  @ViewColumn() accountBalancePayment!: number;
  @ViewColumn() cashPayment!: number;
  @ViewColumn() cardPayment!: number;
  @ViewColumn() tax!: number;
  @ViewColumn() subtotal!: number;
  @ViewColumn() total!: number;
}
