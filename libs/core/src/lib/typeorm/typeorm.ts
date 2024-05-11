import { IID } from '@mdtx/common';
import {
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  Type,
  applyDecorators,
} from './../__external';

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
      { onDelete: 'CASCADE', nullable: true }
    ),
    JoinColumn()
  );
}
