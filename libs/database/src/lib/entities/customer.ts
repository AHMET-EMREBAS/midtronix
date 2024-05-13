import { CredentialEntity, NameEntity } from './__base';
import {
  AddressEntity,
  EmailEntity,
  PhoneEntity,
  UserDetailEntity,
} from './contact';
import { Entity, ManyRelation, Type } from '@mdtx/core';
import { IRole } from '@mdtx/common';

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

export const CustomerEntities: Readonly<Type[]> = [
  Customer,
  CustomerRole,
  CustomerPermission,
];

export const CustomerPhoneEntities: Readonly<Type[]> = [
  CustomerPhone,
  ...CustomerEntities,
];

export const CustomerEmailEntities: Readonly<Type[]> = [
  CustomerEmail,
  ...CustomerEntities,
];

export const CustomerAddressEntities: Readonly<Type[]> = [
  CustomerAddress,
  ...CustomerEntities,
];

export const CustomerRoleEntities: Readonly<Type[]> = [
  CustomerRole,
  CustomerPermission,
];

export const CustomerPermissionEntities: Readonly<Type[]> = [
  CustomerPermission,
];
