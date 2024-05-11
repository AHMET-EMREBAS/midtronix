/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import { IMessage, INotification } from './message';

export interface ICreateMessageDto
  extends Omit<IMessage<IID, IID>, keyof IBaseEntity> {}

export interface ICreateNotificationDto
  extends Omit<INotification<IID, IID>, keyof IBaseEntity> {}
