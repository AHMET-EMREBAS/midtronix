import { BaseEntity, UniqueColumn } from '@mdtx/core';
import { Entity } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @UniqueColumn()
  name!: string;
}
