import { ISupplier } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class Supplier extends BaseEntity implements ISupplier {
  @UniqueColumn()
  name!: string;

  @StringColumn()
  description!: string;
}
