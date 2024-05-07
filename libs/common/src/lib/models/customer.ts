/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICredential, IName } from './__base';
import { IAddress, IEmail, IPhone } from './contact';
import { IImage } from './media';

export interface ICustomerPermission extends IName {}

export interface ICustomerRole<TPermission> extends IName {
  permissions?: TPermission[];
}

export interface ICustomer<TRole, TCustomer> extends ICredential {
  roles?: TRole[];
  supervisor?: TCustomer;
}

export interface ICustomerImage<TOwner> extends IImage<TOwner> {}

export interface ICustomerAddress<TOwner> extends IAddress<TOwner> {}

export interface ICustomerEmail<TOwner> extends IEmail<TOwner> {}

export interface ICustomerPhone<TOwner> extends IPhone<TOwner> {}
