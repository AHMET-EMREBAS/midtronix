import { IOwner } from './__base';

export interface IAddress<TUser> extends IOwner<TUser> {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface IPhone<TUser> extends IOwner<TUser> {
  phone: string;
}

export interface IEmail<TUser> extends IOwner<TUser> {
  email: string;
}
