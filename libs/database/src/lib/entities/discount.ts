import { DescriptionEntity } from './__base';
import { Column, Entity, ManyRelation } from '@mdtx/core';
import { Sku } from './product';
import { CustomerBadge } from './meta';

export class BaseDiscount extends DescriptionEntity {
  @Column({ type: 'numeric', default: 0 }) fixed!: number;
  @Column({ type: 'numeric', default: 0 }) percent!: number;
  @Column({ type: 'date', nullable: true }) startDate!: Date;
  @Column({ type: 'date', nullable: true }) endDate!: Date;
  @ManyRelation(Sku) skus!: Sku[];
}

/**
 * Apply discount when always
 */
@Entity()
export class Discount extends BaseDiscount {}

/**
 * Apply discount when cart has the quantity of the item.
 */
@Entity()
export class ValumeDiscount extends BaseDiscount {
  @Column({ type: 'int' }) quantity!: number;
}

/**
 * Apply discount when the season
 */
@Entity()
export class SeasonalDiscount extends BaseDiscount {}

/**
 * Apply discount when the customer have the loyalty badges
 */
@Entity()
export class LoyaltyDiscount extends BaseDiscount {
  @ManyRelation(CustomerBadge) loyaltyBadges!: CustomerBadge[];
}

/**
 * Apply discount when the items are bought together.
 */
@Entity()
export class BundleDiscount extends BaseDiscount {
  /**
   * When this items bought together, then the discount is applied
   */
  @ManyRelation(Sku) bundles!: Sku[];
}
