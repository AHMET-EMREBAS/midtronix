/* eslint-disable @nx/enforce-module-boundaries */
import { IID } from '@mdtx/common';
import { Type, applyDecorators } from '@nestjs/common';
import { JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

export {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ViewColumn,
  ViewEntity,
  EventSubscriber,
  ManyToOne,
  ManyToMany,
  OneToMany,
  OneToOne,
  JoinColumn,
  JoinTable,
  EntitySubscriberInterface,
} from 'typeorm';

export function OneRelation<T extends IID>(target: Type<T>) {
  return applyDecorators(
    ManyToOne(
      () => target,
      (t) => t.id,
      { eager: true, nullable: true }
    ),
    JoinColumn()
  );
}
export function ManyRelation<T extends IID>(target: Type<T>) {
  return applyDecorators(
    ManyToMany(
      () => target,
      (t) => t.id,
      { eager: true, nullable: true }
    ),
    JoinTable()
  );
}
export function OwnerRelation<T extends IID>(target: Type<T>) {
  return applyDecorators(
    ManyToOne(
      () => target,
      (t) => t.id,
      { onDelete: 'CASCADE' }
    ),
    JoinColumn()
  );
}
