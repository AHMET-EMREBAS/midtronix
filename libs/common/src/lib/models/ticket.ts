/* eslint-disable @typescript-eslint/no-empty-interface */
import { IComment, ICommonTask, IID } from './__base';

export interface ITicket<TUser extends IID, TCustomer extends IID>
  extends ICommonTask<TUser> {
  customer: TCustomer;
}

export interface ITicketComment<TUser extends IID, TTicket extends IID>
  extends IComment<TUser, TTicket> {}
