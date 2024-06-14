import { IPrice } from '@mdtx/models';
import { BaseEntity, Entity, NumberColumn, OwnerRelation } from '@mdtx/core';
import { PriceLevel } from '../price-level';
import { Sku } from '../sku';

@Entity()
export class Price extends BaseEntity implements IPrice {
  @NumberColumn() cost!: number;
  @NumberColumn() price!: number;
  @OwnerRelation(PriceLevel, { eager: true }) priceLevel!: PriceLevel;
  @OwnerRelation(Sku, { eager: true }) sku!: Sku;
}
