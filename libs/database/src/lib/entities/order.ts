import { IOrder } from '@mdtx/common';
import { BaseEntity } from './__base';
import { Entity, Column, OwnerRelation, OneRelation } from '@mdtx/core';
import { PriceLevel, Sku } from './product';
import { Cart } from './cart';

@Entity()
export class Order extends BaseEntity implements IOrder<Sku, Cart, PriceLevel> {
  @Column({ type: 'int' }) quantity!: number;
  @OwnerRelation(Sku, { eager: true }) sku!: Sku;
  @OwnerRelation(Cart) cart!: Cart;
  @OneRelation(PriceLevel) priceLevel!: PriceLevel;
}
