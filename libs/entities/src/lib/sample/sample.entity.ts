import { ISample } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity } from '@mdtx/core';

@Entity()
export class Sample extends BaseEntity implements ISample {
  @UniqueColumn()
  name!: string;
}
