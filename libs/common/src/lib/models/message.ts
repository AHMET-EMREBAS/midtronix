/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import { IUser } from './user';

export interface IMessage<TTarget extends IID = IID, TSource extends IID = IID>
  extends IBaseEntity {
  message: string;
  read?: boolean;
  target: TTarget;
  source: TSource;
}

export interface INotification<
  TTarget extends IID = IID,
  TSource extends IID = IID
> extends IMessage<TTarget, TSource> {}

export type IMessageRaw = IMessage<IUser, IUser>;
export type INotificationRaw = INotification<IUser, IUser>;
