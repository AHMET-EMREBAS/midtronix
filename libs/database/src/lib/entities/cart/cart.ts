import { ICart } from '@mdtx/common';
import { Column, Entity, OneRelation } from '@mdtx/core';
import { User } from '../user';
import { Customer } from '../customer';
import { BaseEntity } from '../__base';
import { Store } from '../store';

@Entity()
export class Cart extends BaseEntity implements ICart<Customer, User, Store> {
  @OneRelation(User) employee!: User;
  @OneRelation(Customer) customer!: Customer;
  @OneRelation(Store) store!: Store;

  @Column({ type: 'varchar', nullable: true }) note!: string;
  @Column({ type: 'boolean', nullable: true }) checkout!: boolean;
}
