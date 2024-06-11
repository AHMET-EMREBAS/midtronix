import { IBaseEntity } from '@mdtx/common';
import { IUser } from '../user';

export interface IPhone extends IBaseEntity {
  phone: string;
  user: IUser;
}
