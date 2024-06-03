import { BaseEntity } from './__base';
import {
  Column,
  Entity,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  OneRelation,
  ViewColumn,
  ViewEntity,
} from '@mdtx/core';
import { Cart } from './cart';
import { IID, ISale, ISaleView } from '@mdtx/common';
import { User } from './user';
import { Customer } from './customer';
import { Store } from './store';
import { Order } from './order';
import { OrderView } from './order.view';
import { SkuView } from './product.view';
import { Quantity } from './product';

@Entity()
export class Sale
  extends BaseEntity
  implements ISale<Cart, User, Customer, Store>
{
  @OneRelation(Cart) cart!: Cart;
  @OneRelation(User) employee!: User;
  @OneRelation(Customer) customer!: Customer;
  @OneRelation(Store) store!: Store;

  @Column({ type: 'numeric' }) accountBalancePayment!: number;
  @Column({ type: 'numeric' }) cashPayment!: number;
  @Column({ type: 'numeric' }) cardPayment!: number;
  @Column({ type: 'numeric' }) taxrate!: number;
  @Column({ type: 'numeric' }) subtotal!: number;
  @Column({ type: 'numeric' }) total!: number;
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
      .addSelect('main.taxrate', 'taxrate')
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
  @ViewColumn() taxrate!: number;
  @ViewColumn() subtotal!: number;
  @ViewColumn() total!: number;
}

@EventSubscriber()
export class SaleSubscriber implements EntitySubscriberInterface<ISale> {
  listenTo() {
    return Sale;
  }

  beforeInsert(
    event: InsertEvent<ISale<IID, IID, IID, IID>>
  ): void | Promise<any> {
    console.log(event.entity);
  }

  async afterInsert(event: InsertEvent<ISale>) {
    const entity = event.entity;
    const cartRepo = event.manager.getRepository(Cart);
    const skuViewRepo = event.manager.getRepository(SkuView);
    const orderViewRepo = event.manager.getRepository(OrderView);
    const quantityRepo = event.manager.getRepository(Quantity);
    const cart = await cartRepo.findOneBy({ id: entity.cart.id });

    console.log('Cart : ', cart);

    if (cart) {
      const orders = await orderViewRepo.find({ where: { cartId: cart.id } });
      console.log(orders);

      for (const order of orders) {
        const foundSkuView = await skuViewRepo.findOneBy({
          skuId: order.skuId + '',
          storeId: cart.store.id + '',
        });

        if (foundSkuView) {
          const quantity = await quantityRepo.findOneBy({
            id: +foundSkuView.quantityId,
          });
          if (quantity) {
            console.log('Updating Quantity : ', quantity);
            await quantityRepo.decrement(
              { id: quantity.id },
              'quantity',
              parseInt(order.quantity + '')
            );
          }
        }
      }
    }
  }
}
