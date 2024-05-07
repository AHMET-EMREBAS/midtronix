/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICredential, IName } from './__base';
import { IAddress, IEmail, IPhone } from './contact';
import { IImage } from './media';

export interface IPermission extends IName {}

export interface IRole<TPermission> extends IName {
  permissions?: TPermission[];
}

export interface IUser<TRole, TUser> extends ICredential {
  roles?: TRole[];
  supervisor?: TUser;
}

export interface IUserImage<TOwner> extends IImage<TOwner> {}

export interface IUserAddress<TOwner> extends IAddress<TOwner> {}

export interface IUserEmail<TOwner> extends IEmail<TOwner> {}

export interface IUserPhone<TOwner> extends IPhone<TOwner> {}
