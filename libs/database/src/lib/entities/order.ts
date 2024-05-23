import { IOrder } from '@mdtx/common';
import { BaseEntity } from './__base';
import { Entity, Column, OwnerRelation, OneRelation } from '@mdtx/core';
import { PriceLevel, Sku } from './product';
import { Cart } from './cart';

/**
 * @param quantity
 * @param sku
 * @param salePrice
 * @param salSubtotal
 * @param saleTotal
 */
@Entity()
export class Order extends BaseEntity implements IOrder<Sku, Cart, PriceLevel> {
  @Column({ type: 'int' }) quantity!: number;
  @OwnerRelation(Sku, { eager: true }) sku!: Sku;
  @OneRelation(PriceLevel) priceLevel!: PriceLevel;
  @OwnerRelation(Cart) cart!: Cart;
  
  @Column({ type: 'numeric', nullable: true }) taxrate!: number;
  @Column({ type: 'numeric', nullable: true }) salePrice!: number;
  @Column({ type: 'numeric', nullable: true }) saleSubtotal!: number;
  @Column({ type: 'numeric', nullable: true }) saleTotal!: number;
}
