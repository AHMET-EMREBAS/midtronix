/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICredential, IID } from './__base';
import { IAddress, IEmail, IPhone } from './contact';
import { IImage } from './media';
import { IRole } from './role';

export interface IUser<TRole extends IID = IID, TUser extends IID = IID>
  extends ICredential {
  roles?: TRole[];
  supervisor?: TUser;
}

export interface IUserImage<TOwner extends IID = IID> extends IImage<TOwner> {}

export interface IUserAddress<TOwner extends IID = IID>
  extends IAddress<TOwner> {}

export interface IUserEmail<TOwner extends IID = IID> extends IEmail<TOwner> {}

export interface IUserPhone<TOwner extends IID = IID> extends IPhone<TOwner> {}

export type IUserRaw = IUser<IRole, IUser>;
export type IUserImageRaw = IUserImage<IUser>;
export type IUserAddressRaw = IUserAddress<IUser>;
export type IUserEmailRaw = IUserEmail<IUser>;
export type IUserPhoneRaw = IUserPhone<IUser>;
