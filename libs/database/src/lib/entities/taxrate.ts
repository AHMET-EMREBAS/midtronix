import { Column, Entity } from '@mdtx/core';
import { BaseEntity } from './__base';
import { ITaxrate } from '@mdtx/common';

@Entity()
export class Taxrate extends BaseEntity implements ITaxrate {
  @Column({ type: 'varchar' }) state!: string;
  @Column({ type: 'varchar' }) district!: string;
  @Column({ type: 'numeric', precision: 10, scale: 2 }) rate!: number;
}

export const TaxrateEntities = [Taxrate];
