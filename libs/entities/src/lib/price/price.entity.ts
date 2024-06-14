import { IPrice } from '@mdtx/models';
import { BaseEntity, Entity, NumberColumn, OwnerRelation } from '@mdtx/core';
import { PriceLevel } from '../price-level';
import { Sku } from '../sku';

@Entity()
export class Price extends BaseEntity implements IPrice {
  @NumberColumn() cost!: number;
  @NumberColumn() price!: number;
  @OwnerRelation(PriceLevel) priceLevel!: PriceLevel;
  @OwnerRelation(Sku) sku!: Sku;
}
