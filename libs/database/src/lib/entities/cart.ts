import { ICart } from '@mdtx/common';
import { Column, Entity, OwnerRelation } from '@mdtx/core';
import { User } from './user';
import { Customer } from './customer';
import { BaseEntity } from './__base';
import { Store } from './store';

@Entity()
export class Cart extends BaseEntity implements ICart<User, Customer, Store> {
  @OwnerRelation(User) employee!: User;
  @OwnerRelation(Customer) customer!: Customer;
  @OwnerRelation(Store) store!: Store;

  @Column({ type: 'varchar', nullable: true }) note!: string;
  @Column({ type: 'boolean', nullable: true }) checkout!: boolean;
}
