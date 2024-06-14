import { IQuantity } from '@mdtx/models';
import { BaseEntity, Entity, NumberColumn, OwnerRelation } from '@mdtx/core';
import { Store } from '../store';
import { Sku } from '../sku';

@Entity()
export class Quantity extends BaseEntity implements IQuantity {
  @NumberColumn() quantity!: number;
  @OwnerRelation(Store, { eager: true }) store!: Store;
  @OwnerRelation(Sku, { eager: true }) sku!: Sku;
}
