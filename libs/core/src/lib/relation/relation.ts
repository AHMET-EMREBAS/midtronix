import { IID } from '@mdtx/common';
import { Type, applyDecorators } from '@nestjs/common';
import {
  ColumnOptions,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  RelationOptions,
} from 'typeorm';

/**
 * Owner relation owns the entity
 * When the owner is deleted, the children are deleted!
 * @param target
 * @returns
 */
export function OwnerRelation<T extends IID>(
  target: Type<T>,
  options: RelationOptions = {}
) {
  return applyDecorators(
    ManyToOne(
      () => target,
      (t) => t.id,
      {
        eager: false,
        onDelete: 'CASCADE',
        nullable: true,
        ...options,
      }
    ),
    JoinColumn()
  );
}

/**
 * Couple relations are strictly coupled together.
 * When the first couple is deleted, the other is deleted as well.
 * @param target
 * @returns
 */
export function CoupleRelation<T extends IID>(target: Type<T>) {
  return applyDecorators(
    OneToOne(
      () => target,
      (t) => t.id,
      { eager: true, onDelete: 'CASCADE' }
    ),
    JoinColumn()
  );
}

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

export function ManyRelation<T extends IID>(target: Type<T>) {
  return applyDecorators(
    ManyToMany(
      () => target,
      (t) => t.id,
      { eager: true, nullable: true, onDelete: 'SET NULL' }
    ),
    JoinTable()
  );
}
