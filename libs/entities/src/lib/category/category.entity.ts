import { ICategory } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity } from '@mdtx/core';

@Entity()
export class Category extends BaseEntity implements ICategory {
  @UniqueColumn()
  name!: string;
}
