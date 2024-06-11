import { IRole } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class Role extends BaseEntity implements IRole {
  @UniqueColumn()
  name!: string;
}
