import { IMessage } from '@mdtx/common';
import { Column, Entity, OwnerRelation } from '@mdtx/core';
import { User } from './user';
import { BaseEntity } from './__base';

@Entity()
export class Message extends BaseEntity implements IMessage<User, User> {
  @Column({ type: 'varchar' }) message!: string;
  @Column({ type: 'boolean' }) read?: boolean;
  @OwnerRelation(User) target!: User;
  @OwnerRelation(User) source!: User;
}

@Entity()
export class Notification extends Message implements IMessage<User, User> {}
