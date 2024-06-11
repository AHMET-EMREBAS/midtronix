import { IPermission } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class Permission extends BaseEntity implements IPermission {
  @StringColumn()
  resourceName!: string;

  @StringColumn()
  actionName!: string;

  @UniqueColumn()
  name!: string;
}