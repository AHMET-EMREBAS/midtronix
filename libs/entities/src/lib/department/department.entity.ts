import { IDepartment } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class Department extends BaseEntity implements IDepartment {
  @UniqueColumn()
  name!: string;
}
