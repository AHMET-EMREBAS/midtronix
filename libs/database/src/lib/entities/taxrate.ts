import { Column, Entity } from '@mdtx/core';
import { BaseEntity } from './__base';
import { ITaxrate } from '@mdtx/common';

@Entity()
export class Taxrate extends BaseEntity implements ITaxrate {
  @Column({ type: 'varchar' }) state!: string;
  @Column({ type: 'varchar' }) district!: string;
  @Column({ type: 'numeric' }) rate!: number;
}
