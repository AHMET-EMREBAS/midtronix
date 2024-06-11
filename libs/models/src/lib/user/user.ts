import { IBaseEntity } from '@mdtx/common';
import { IRole } from '../role';

export interface IUser extends IBaseEntity {
  username: string;
  password: string;
  roles: IRole[];
}
