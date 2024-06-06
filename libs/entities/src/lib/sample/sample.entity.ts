import { ISample } from '@mdtx/models';
import {
  BaseEntity,
  ManyRelation,
  OneRelation,
  OwnerRelation,
  UniqueColumn,
} from '@mdtx/core';
import { Entity } from 'typeorm';
import { Category } from '../category';

@Entity()
export class Sample extends BaseEntity implements ISample {
  @UniqueColumn()
  name!: string;

  @OneRelation(Category)
  one?: Category;

  @ManyRelation(Category)
  many?: Category[];

  @OwnerRelation(Category)
  owner?: Category;
}
