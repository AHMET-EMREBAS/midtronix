import { IOrder } from '@mdtx/common';
import { BaseEntity } from './__base';
import { Entity, Column, OwnerRelation } from '@mdtx/core';
import { Sku } from './product';
import { Cart } from './cart';

@Entity()
export class Order extends BaseEntity implements IOrder<Sku, Cart> {
  @Column({ type: 'int' }) quantity!: number;
  @OwnerRelation(Sku) sku!: Sku;
  @OwnerRelation(Cart) cart!: Cart;
}
