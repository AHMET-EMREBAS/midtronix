import { IMessage } from '@mdtx/common';
import { Column, Entity, OwnerRelation, Type } from '@mdtx/core';
import { User } from './user';
import { BaseEntity } from './__base';

@Entity()
export class Message extends BaseEntity implements IMessage<User, User> {
  @Column({ type: 'varchar', nullable: true }) message!: string;
  @Column({ type: 'boolean', nullable: true }) read?: boolean;
  @OwnerRelation(User) target!: User;
  @OwnerRelation(User) source!: User;
}

@Entity()
export class Notification extends Message implements IMessage<User, User> {}

export const MessageEntities: Readonly<Type[]> = [Message, User];

export const NotificationEntities: Readonly<Type[]> = [Notification, User];
