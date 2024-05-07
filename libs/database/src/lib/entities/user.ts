import { CredentialEntity, NameEntity } from './__base';
import { AddressEntity, UserDetailEntity } from './contact';
import { Entity, ManyRelation } from '@mdtx/core';
import { IRole } from '@mdtx/common';

@Entity()
export class Permission extends NameEntity {}

@Entity()
export class Role extends NameEntity implements IRole<Permission> {
  @ManyRelation(Permission)
  permissions?: Permission[];
}

@Entity()
export class User extends CredentialEntity {
  @ManyRelation(Role)
  roles?: Role[];
}

@Entity()
export class UserDetail extends UserDetailEntity(User) {}

@Entity()
export class UserAddress extends AddressEntity(User) {}

@Entity()
export class UserEmail extends AddressEntity(User) {}

@Entity()
export class UserPhone extends AddressEntity(User) {}
