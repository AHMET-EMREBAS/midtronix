import { ISample } from '@mdtx/models';
import { BaseEntity, UniqueColumn } from '@mdtx/core';
import { Entity } from 'typeorm';

@Entity()
export class Sample extends BaseEntity implements ISample {
  @UniqueColumn()
  name!: string;
}
