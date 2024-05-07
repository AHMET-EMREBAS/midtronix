/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity } from './__base';

export interface IMessage<TTarget, TSource> extends IBaseEntity {
  message: string;
  read?: boolean;
  /**
   * to
   */
  target: TTarget;

  /**
   * from
   */
  source: TSource;
}

export interface INotification<TTarget, TSource>
  extends IMessage<TTarget, TSource> {}
