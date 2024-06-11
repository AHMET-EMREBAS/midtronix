import { IPhone } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class Phone extends BaseEntity implements IPhone {
  @UniqueColumn()
  name!: string;
}
