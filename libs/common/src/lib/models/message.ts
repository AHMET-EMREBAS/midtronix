/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';

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
