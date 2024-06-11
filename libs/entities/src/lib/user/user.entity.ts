import { IRole, IUser } from '@mdtx/models';
import {
  BaseEntity,
  UniqueColumn,
  Entity,
  StringColumn,
  ManyRelation,
} from '@mdtx/core';
import { Role } from '../role';

@Entity()
export class User extends BaseEntity implements IUser {
  @UniqueColumn()
  username!: string;

  @StringColumn()
  password!: string;

  @ManyRelation(Role)
  roles!: IRole[];
}
