import { CredentialEntity, NameEntity } from './__base';
import {
  AddressEntity,
  EmailEntity,
  PhoneEntity,
  PointEntity,
  UserDetailEntity,
} from './__factory';
import { Column, Entity, ManyRelation, Type } from '@mdtx/core';
import { IRole } from '@mdtx/common';
import { CustomerBadge } from './meta';

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
export class Customer extends CredentialEntity {
  @ManyRelation(CustomerRole)
  roles?: CustomerRole[];

  @ManyRelation(CustomerBadge)
  badges?: CustomerBadge[];
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
