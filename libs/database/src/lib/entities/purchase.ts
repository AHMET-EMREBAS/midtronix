import { IID, IPurchase } from '@mdtx/common';
import { BaseEntity } from './__base';
import { Entity, Column, OneRelation } from '@mdtx/core';
import { Manufacturer } from './manufacturer';
import { User } from './user';
import { Sku } from './product';

@Entity()
export class Purchase
  extends BaseEntity
  implements IPurchase<Sku, Manufacturer, User>
{
  @Column({ type: 'numeric', default: 0 }) unitCost!: number;
  @Column({ type: 'numeric', default: 0 }) deliveryCost!: number;
  @Column({ type: 'numeric', default: 0 }) taxrate!: number;
  @Column({ type: 'int' }) quantity!: number;
  @Column({ type: 'varchar', nullable: true }) orderDate!: Date;
  @Column({ type: 'varchar', nullable: true }) deliveryDate!: Date;
  @Column({ type: 'varchar', nullable: true }) notes!: string;
  @Column({ type: 'boolean', default: false }) confirmed!: boolean;
  @OneRelation(Sku) sku!: Sku;
  @OneRelation(Manufacturer) manufacturer!: Manufacturer;
  @OneRelation(User) employee!: User;
}
