import { IBaseEntity } from '@mdtx/common';
import { IUser } from '../user';

export interface IEmail extends IBaseEntity {
  email: string;
  user?: IUser;
}
