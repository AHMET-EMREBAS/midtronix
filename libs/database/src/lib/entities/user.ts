import { CredentialEntity, NameEntity } from './__base';
import {
  AddressEntity,
  EmailEntity,
  PhoneEntity,
  UserDetailEntity,
} from './contact';
import { Entity, ManyRelation } from '@mdtx/core';
import { IRole } from '@mdtx/common';

/**
 * @param name
 */
@Entity()
export class Permission extends NameEntity {}

/**
 * @param name string
 * @param permissions {@link Permission}[]
 */
@Entity()
export class Role extends NameEntity implements IRole<Permission> {
  @ManyRelation(Permission)
  permissions?: Permission[];
}

/**
 * Extends {@link CredentialEntity}
 * @param roles {@link Role}[]
 */
@Entity()
export class User extends CredentialEntity {
  @ManyRelation(Role)
  roles?: Role[];
}

/**
 * Extends {@link UserDetailEntity}
 */
@Entity()
export class UserDetail extends UserDetailEntity(User) {}
/**
 * Extends {@link AddressEntity}
 */
@Entity()
export class UserAddress extends AddressEntity(User) {}
/**
 * Extends {@link EmailEntity}
 */
@Entity()
export class UserEmail extends EmailEntity(User) {}
/**
 * Extends {@link PhoneEntity}
 */
@Entity()
export class UserPhone extends PhoneEntity(User) {}
