/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import { ITicket } from './ticket';

export interface ICreateTicketDto
  extends Omit<ITicket<IID, IID>, keyof IBaseEntity> {}
