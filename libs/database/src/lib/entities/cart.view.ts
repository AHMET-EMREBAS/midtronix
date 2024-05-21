import { ViewEntity, ViewColumn } from '@mdtx/core';
import { Cart } from './cart';
import { Customer } from './customer';
import { User } from './user';
import { Store } from './store';
import { ICartView } from '@mdtx/common';

/**
 * @param id
 * @param storeId
 * @param customerId
 * @param userId
 */
@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'id')
      .addSelect('store.id', 'storeId')
      .addSelect('customer.id', 'customerId')
      .addSelect('user.id', 'userId')
      .from(Cart, 'main')
      .leftJoin(Store, 'store', 'store.id = main.storeId')
      .leftJoin(Customer, 'customer', 'customer.id = main.ownerId')
      .leftJoin(User, 'user', 'user.id = main.userId');
  },
})
export class CartView implements ICartView {
  @ViewColumn() id!: number;
  @ViewColumn() storeId!: number;
  @ViewColumn() customerId!: number;
  @ViewColumn() userId!: number;
}
