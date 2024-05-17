/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICredential, IID } from './__base';
import { IAddress, IEmail, IPhone } from './contact';
import { IImage } from './media';
import { IPermission, IRole } from './role';
import { IUser } from './user';

export interface ICustomer<TRole extends IID = IID, TUser extends IID = IID>
  extends ICredential {
  roles?: TRole[];
  supervisor?: TUser;
}

export interface ICustomerPermission extends IPermission {}

export interface ICustomerRole<TPermission extends IID = IID>
  extends IRole<TPermission> {}

export interface ICustomerImage<TOwner extends IID = IID>
  extends IImage<TOwner> {}

export interface ICustomerAddress<TOwner extends IID = IID>
  extends IAddress<TOwner> {}

export interface ICustomerEmail<TOwner extends IID = IID>
  extends IEmail<TOwner> {}

export interface ICustomerPhone<TOwner extends IID = IID>
  extends IPhone<TOwner> {}

export type ICustomerRaw = ICustomer<IRole, IUser>;

export type ICustomerRoleRaw = ICustomerRole<IPermission>;
export type ICustomerImageRaw = ICustomerImage<IImage>;
export type ICustomerAddreRaw = ICustomerAddress<IAddress>;
export type ICustomerEmailRaw = ICustomerEmail<IEmail>;
export type ICustomerPhoneRaw = ICustomerPhone<IPhone>;
