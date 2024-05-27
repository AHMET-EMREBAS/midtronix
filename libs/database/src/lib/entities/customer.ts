import { BaseEntity, CredentialEntity, NameEntity } from './__base';
import {
  AddressEntity,
  EmailEntity,
  PhoneEntity,
  PointEntity,
  UserDetailEntity,
} from './__factory';
import {
  Column,
  Entity,
  ManyRelation,
  OwnerRelation,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  OneRelation,
} from '@mdtx/core';
import { ICustomerAccount, ICustomerRaw, IRole } from '@mdtx/common';
import { CustomerBadge } from './meta';
import { PriceLevel } from './product';

/**
 * @param name string
 */
@Entity()
export class CustomerPermission extends NameEntity {}

/**
 * @param name string
 * @param permissions CustomerPermission[]
 */
@Entity()
export class CustomerRole
  extends NameEntity
  implements IRole<CustomerPermission>
{
  @ManyRelation(CustomerPermission)
  permissions?: CustomerPermission[];
}

/**
 * @param username — string
 * @param password — string
 * @param roles {@link CustomerRole}[]
 */
@Entity()
export class Customer extends CredentialEntity implements ICustomerRaw {
  @ManyRelation(CustomerRole) roles?: CustomerRole[];
  @ManyRelation(CustomerBadge) badges?: CustomerBadge[];
}

/**
 * Extends {@link UserDetailEntity}
 */
@Entity()
export class CustomerDetail extends UserDetailEntity(Customer) {}

/**
 * Extends {@link AddressEntity}
 */
@Entity()
export class CustomerAddress extends AddressEntity(Customer) {}

/**
 * Extends {@link EmailEntity}
 */
@Entity()
export class CustomerEmail extends EmailEntity(Customer) {}

/**
 * Extends {@link PhoneEntity}
 */
@Entity()
export class CustomerPhone extends PhoneEntity(Customer) {}

/**
 * Customer collects points on each purchase
 */
@Entity()
export class CustomerPoint extends PointEntity(Customer) {}

@Entity()
export class CustomerAccount extends BaseEntity implements ICustomerAccount {
  @Column({ type: 'numeric' }) balance!: number;
  @OneRelation(PriceLevel) priceLevel!: PriceLevel;
  @OwnerRelation(Customer) customer!: Customer;
}

@EventSubscriber()
export class CustomerSubscriber implements EntitySubscriberInterface<Customer> {
  listenTo() {
    return Customer;
  }
  async afterInsert(event: InsertEvent<Customer>) {
    const customer = event.entity;
    const manager = event.manager;
    const accountRepo = manager.getRepository(CustomerAccount);

    await accountRepo.save({
      balance: 0,
      customer: { id: customer.id },
      priceLevel: { id: 1 },
    });
  }
}
