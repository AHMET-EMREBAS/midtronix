import { IRole, IUser } from '@mdtx/models';
import {
  BaseEntity,
  UniqueColumn,
  Entity,
  ManyRelation,
  HashedColumn,
} from '@mdtx/core';
import { Role } from '../role';

@Entity()
export class User extends BaseEntity implements IUser {
  @UniqueColumn()
  username!: string;

  @HashedColumn({ required: true })
  password!: string;

  @ManyRelation(Role)
  roles!: IRole[];
}
