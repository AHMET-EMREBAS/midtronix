import { IBaseEntity } from './__base';

export interface IMessage<TUser> extends IBaseEntity {
  message?: string;
  read?: boolean;
  to?: TUser;
  from: TUser;
}
