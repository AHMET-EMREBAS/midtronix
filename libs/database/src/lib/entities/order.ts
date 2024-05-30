import { IID, IOrder } from '@mdtx/common';
import { BaseEntity } from './__base';
import {
  Entity,
  Column,
  OneRelation,
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
} from '@mdtx/core';
import { Sku } from './product';
import { Cart } from './cart';

/**
 * @param sku
 * @param cart
 * @param quantity
 * @param unitPrice
 * @param subtotal
 * @param total
 */
@Entity()
export class Order extends BaseEntity implements IOrder<Sku, Cart> {
  @OneRelation(Sku) sku!: Sku;
  @OneRelation(Cart) cart!: Cart;
  @Column({ type: 'int' }) quantity!: number;
  @Column({ type: 'numeric' }) taxrate!: number;
  @Column({ type: 'numeric' }) unitPrice!: number;
  @Column({ type: 'numeric' }) subtotal!: number;
  @Column({ type: 'numeric' }) total!: number;
}

@EventSubscriber()
export class OrderSubscriber implements EntitySubscriberInterface<IOrder> {
  listenTo() {
    return Order;
  }

  beforeUpdate(event: UpdateEvent<IOrder<IID, IID>>) {
    const uentity = event.entity as IOrder;
    const entity = event.databaseEntity;

    if (uentity.unitPrice != undefined) {
      const subtotal =
        parseInt(entity.quantity + '') * parseFloat(uentity.unitPrice + '');
      const taxvalue = (parseFloat(entity.taxrate + '') / 100) * subtotal;
      const total = subtotal + taxvalue;
      uentity.subtotal = subtotal;
      uentity.total = total;
      // Udpate taxrate
    } else if (uentity.taxrate != undefined) {
      const taxvalue =
        (uentity.taxrate / 100) * parseFloat(entity.subtotal + '');
      uentity.total = parseFloat(entity.subtotal + '') + taxvalue;

      // Udpate quantity
    } else if (uentity.quantity != undefined) {
      const subtotal = uentity.quantity * parseFloat(entity.unitPrice + '');
      const taxvalue = (parseFloat(entity.taxrate + '') / 100) * subtotal;

      uentity.subtotal = subtotal;
      uentity.total = subtotal + taxvalue;
    }
  }

  beforeInsert(event: InsertEvent<IOrder<IID, IID>>) {
    const entity = event.entity;

    const { unitPrice, quantity, taxrate } = entity;

    console.log(entity);
    const subtotal = quantity * unitPrice;
    const taxvalue = (taxrate / 100) * subtotal;
    const total = subtotal + taxvalue;
    entity.subtotal = subtotal;
    entity.total = total;
  }
}
