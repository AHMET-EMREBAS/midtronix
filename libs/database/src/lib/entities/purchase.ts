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
  @Column({ type: 'numeric' }) unitCost!: number;
  @Column({ type: 'numeric' }) deliveryCost!: number;
  @Column({ type: 'numeric' }) taxrate!: number;
  @Column({ type: 'int' }) quantity!: number;
  @Column({ type: 'varchar' }) orderDate!: Date;
  @Column({ type: 'varchar' }) deliveryDate!: Date;
  @Column({ type: 'varchar' }) notes!: string;
  @Column({ type: 'boolean' }) confirmed!: boolean;
  @OneRelation(Sku) sku!: Sku;
  @OneRelation(Manufacturer) manufacturer!: Manufacturer;
  @OneRelation(User) employee!: User;
}
