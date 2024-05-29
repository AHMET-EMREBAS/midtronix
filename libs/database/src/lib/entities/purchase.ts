import { IID, IPurchase } from '@mdtx/common';
import { BaseEntity } from './__base';
import { Entity, Column, OneRelation } from '@mdtx/core';
import { Manufacturer } from './manufacturer';
import { User } from './user';

@Entity()
export class Purchase extends BaseEntity implements IPurchase {
  @Column({ type: 'varchar' }) name!: string;
  @Column({ type: 'varchar' }) description!: string;
  @Column({ type: 'varchar' }) upc!: string;
  @Column({ type: 'numeric' }) unitCost!: number;
  @Column({ type: 'numeric' }) deliveryCost!: number;
  @Column({ type: 'numeric' }) taxrate!: number;
  @Column({ type: 'numeric' }) subtotal!: number;
  @Column({ type: 'numeric' }) total!: number;
  @Column({ type: 'int' }) quantity!: number;
  @Column({ type: 'varchar' }) orderDate!: Date;
  @Column({ type: 'varchar' }) deliveryDate!: Date;
  @Column({ type: 'varchar' }) notes!: string;
  @Column({ type: 'boolean' }) confirmed!: boolean;
  @OneRelation(Manufacturer) manufacturer!: IID;
  @OneRelation(User) employee!: IID;
}
