import { OwnerEntity } from './__base';
import { IAddress, IEmail, IID, IPhone } from '@mdtx/common';
import { Column, Type } from '@mdtx/core';

export function UserDetailEntity<T extends IID>(owner: Type<T>) {
  class UserDetail extends OwnerEntity(owner) {
    @Column({ type: 'varchar', nullable: true }) firstName?: string;
    @Column({ type: 'varchar', nullable: true }) lastName?: string;
    @Column({ type: 'varchar', nullable: true }) middleName?: string;
    @Column({ type: 'varchar', nullable: true }) dob?: Date | undefined;
    @Column({ type: 'varchar', nullable: true }) ssn?: string | undefined;
    @Column({ type: 'varchar', nullable: true }) dl?: string | undefined;
  }

  return UserDetail;
}

/**
 * Create address entity for
 * @param owner
 * @returns
 */
export function AddressEntity<T extends IID>(owner: Type<T>) {
  class Address extends OwnerEntity(owner) implements IAddress<T> {
    @Column({ type: 'varchar', nullable: true }) street!: string;
    @Column({ type: 'varchar', nullable: true }) city!: string;
    @Column({ type: 'varchar', nullable: true }) state!: string;
    @Column({ type: 'varchar', nullable: true }) zip!: string;
  }
  return Address;
}

/**
 * Create phone entity for
 */
export function PhoneEntity<T extends IID>(owner: Type<T>) {
  class PhoneEntity extends OwnerEntity(owner) implements IPhone<T> {
    @Column({ type: 'varchar', nullable: true })
    phone!: string;
  }
  return PhoneEntity;
}

/**
 * Create email entity for
 * @param owner
 * @returns
 */
export function EmailEntity<T extends IID>(owner: Type<T>) {
  class EmailEntity extends OwnerEntity(owner) implements IEmail<T> {
    @Column({ type: 'varchar', nullable: true })
    email!: string;
  }
  return EmailEntity;
}
