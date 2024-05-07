import { IOwner } from './__base';

export interface IUserDetail {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  dob?: Date;
  ssn?: string;
  dl?: string;
}

export interface IAddress<TOwner> extends IOwner<TOwner> {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface IPhone<TOwner> extends IOwner<TOwner> {
  phone: string;
}

export interface IEmail<TOwner> extends IOwner<TOwner> {
  email: string;
}
