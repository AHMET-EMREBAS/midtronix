import { CredentialEntity, NameEntity } from './__base';
import { AddressEntity, UserDetailEntity } from './contact';
import { Entity, ManyRelation } from '@mdtx/core';
import { IRole } from '@mdtx/common';

@Entity()
export class CustomerPermission extends NameEntity {}

@Entity()
export class CustomerRole
  extends NameEntity
  implements IRole<CustomerPermission>
{
  @ManyRelation(CustomerPermission)
  permissions?: CustomerPermission[];
}

@Entity()
export class Customer extends CredentialEntity {
  @ManyRelation(CustomerRole)
  roles?: CustomerRole[];
}

@Entity()
export class CustomerDetail extends UserDetailEntity(Customer) {}

@Entity()
export class CustomerAddress extends AddressEntity(Customer) {}

@Entity()
export class CustomerEmail extends AddressEntity(Customer) {}

@Entity()
export class CustomerPhone extends AddressEntity(Customer) {}
