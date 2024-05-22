import { NameEntity } from './__base';
import { Column, Entity, ManyRelation } from '@mdtx/core';
import { Sku } from './product';
import { IDiscount } from '@mdtx/common';
import { SkuEntities } from './__entities';

export class BaseDiscount extends NameEntity {
  @Column({ type: 'numeric', default: 0 }) fixed!: number;
  @Column({ type: 'numeric', default: 0 }) percent!: number;
  @Column({ type: 'date', nullable: true }) startDate!: Date;
  @Column({ type: 'date', nullable: true }) endDate!: Date;
  @ManyRelation(Sku) skus!: Sku[];
}

/**
 * Discount By SKU
 */

@Entity()
export class Discount extends BaseDiscount implements IDiscount<Sku> {}
