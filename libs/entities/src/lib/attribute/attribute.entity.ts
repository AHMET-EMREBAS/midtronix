import { IAttribute } from '@mdtx/models';
import { BaseEntity, Entity, OwnerRelation, StringColumn } from '@mdtx/core';
import { Sku } from '../sku';

@Entity()
export class Attribute extends BaseEntity implements IAttribute {
  @StringColumn() key!: string;
  @StringColumn() value!: string;
  @OwnerRelation(Sku) sku!: Sku;
}
