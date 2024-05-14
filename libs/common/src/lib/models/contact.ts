/* eslint-disable @typescript-eslint/no-empty-interface */
import { IID, IOwner } from './__base';

export interface IUserDetail<TOwner extends IID = IID> extends IOwner<TOwner> {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  dob?: Date;
  ssn?: string;
  dl?: string;
}

export interface IAddress<TOwner extends IID = IID> extends IOwner<TOwner> {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface IPhone<TOwner extends IID = IID> extends IOwner<TOwner> {
  phone: string;
}

export interface IEmail<TOwner extends IID = IID> extends IOwner<TOwner> {
  email: string;
}
