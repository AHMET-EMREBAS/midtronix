import { IBaseEntity } from '@mdtx/common';
import { IUser } from '../user';

export interface IAddress extends IBaseEntity {
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  user: IUser;
}
