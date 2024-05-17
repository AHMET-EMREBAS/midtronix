import { IID } from '@mdtx/common';
import {
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  Type,
  applyDecorators,
} from './../__external';
import { RelationOptions } from 'typeorm';

export function OneRelation<T extends IID>(target: Type<T>) {
  return applyDecorators(
    ManyToOne(
      () => target,
      (t) => t.id,
      { eager: true, nullable: true, onDelete: 'SET NULL' }
    ),
    JoinColumn()
  );
}

export function ManyRelation<T extends IID>(
  target: Type<T>,
  options: RelationOptions = { eager: true, nullable: true }
) {
  return applyDecorators(
    ManyToMany(
      () => target,
      (t) => t.id,
      { ...options, nullable: true, onDelete: 'SET NULL' }
    ),
    JoinTable()
  );
}

export function OwnerRelation<T extends IID>(
  target: Type<T>,
  options: Pick<RelationOptions, 'eager'> = {}
) {
  return applyDecorators(
    ManyToOne(
      () => target,
      (t) => t.id,
      { onDelete: 'CASCADE', nullable: true, ...options }
    ),
    JoinColumn()
  );
}
