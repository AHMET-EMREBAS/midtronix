import { IRole } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, ManyRelation } from '@mdtx/core';
import { Permission } from '../permission';

@Entity()
export class Role extends BaseEntity implements IRole {
  @UniqueColumn()
  name!: string;

  @ManyRelation(Permission)
  permissions!: Permission[];
}
