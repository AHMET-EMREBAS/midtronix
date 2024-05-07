/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';

export interface IMessage<TTarget extends IID, TSource extends IID>
  extends IBaseEntity {
  message: string;
  read?: boolean;
  target: TTarget;
  source: TSource;
}

export interface INotification<TTarget extends IID, TSource extends IID>
  extends IMessage<TTarget, TSource> {}
