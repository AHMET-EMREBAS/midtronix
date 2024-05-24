import { IOrder } from '@mdtx/common';
import { BaseEntity } from './__base';
import { Entity, Column, OneRelation } from '@mdtx/core';
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
  @OneRelation(Sku) cart!: Cart;
  @Column({ type: 'int' }) quantity!: number;
  @Column({ type: 'numeric' }) unitPrice!: number;
  @Column({ type: 'numeric' }) subtotal!: number;
  @Column({ type: 'numeric' }) total!: number;
}
