/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICredential, IID } from './__base';
import { IAddress, IEmail, IPhone } from './contact';
import { IImage } from './media';
import { IPermission, IRole } from './role';

export interface ICustomerPermission extends IPermission {}

export interface ICustomerRole<TPermission extends IID>
  extends IRole<TPermission> {}

export interface ICustomer<TRole extends IID, TCustomer extends IID>
  extends ICredential {
  roles?: TRole[];
  supervisor?: TCustomer;
}

export interface ICustomerImage<TOwner extends IID> extends IImage<TOwner> {}

export interface ICustomerAddress<TOwner extends IID>
  extends IAddress<TOwner> {}

export interface ICustomerEmail<TOwner extends IID> extends IEmail<TOwner> {}

export interface ICustomerPhone<TOwner extends IID> extends IPhone<TOwner> {}
