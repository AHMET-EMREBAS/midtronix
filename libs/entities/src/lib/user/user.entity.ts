import { IUser } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class User extends BaseEntity implements IUser {
  @UniqueColumn()
  name!: string;
}
