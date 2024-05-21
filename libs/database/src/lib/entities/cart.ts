import { ICart, IID } from '@mdtx/common';
import { Entity, OwnerRelation } from '@mdtx/core';
import { User } from './user';
import { Customer } from './customer';
import { BaseEntity } from './__base';

@Entity()
export class Cart extends BaseEntity implements ICart<User, Customer> {
  @OwnerRelation(User) user!: User;
  @OwnerRelation(Customer) owner!: Customer;
}

export const CartEntities = [Cart, User, Customer];
