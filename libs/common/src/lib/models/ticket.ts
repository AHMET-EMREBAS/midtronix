/* eslint-disable @typescript-eslint/no-empty-interface */
import { IComment, ICommonTask, IID } from './__base';
import { ICustomer } from './customer';
import { IUser } from './user';

export interface ITicket<TUser extends IID = IID, TCustomer extends IID = IID>
  extends ICommonTask<TUser> {
  customer: TCustomer;
}

export interface ITicketComment<
  TUser extends IID = IID,
  TTicket extends IID = IID
> extends IComment<TUser, TTicket> {}

export type ITicketRaw = ITicket<IUser, ICustomer>;
export type ITicketCommentRaw = ITicketComment<IUser, ITicket>;
