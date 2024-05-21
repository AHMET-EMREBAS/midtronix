import { ICart } from '@mdtx/common';
import { Entity, OwnerRelation } from '@mdtx/core';
import { User } from './user';
import { Customer } from './customer';
import { BaseEntity } from './__base';
import { Store } from './store';
import { CartView } from './cart.view';

@Entity()
export class Cart extends BaseEntity implements ICart<User, Customer, Store> {
  @OwnerRelation(User) user!: User;
  @OwnerRelation(Customer) owner!: Customer;
  @OwnerRelation(Store) store!: Store;
}

export const CartEntities = [Cart, CartView, User, Customer];
