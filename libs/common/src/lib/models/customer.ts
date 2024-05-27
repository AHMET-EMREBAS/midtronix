/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, ICredential, IID } from './__base';
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
export type ICustomerPermissionRaw = ICustomerPermission;
export type ICustomerRoleRaw = ICustomerRole<IPermission>;
export type ICustomerImageRaw = ICustomerImage<ICustomer>;
export type ICustomerAddressRaw = ICustomerAddress<ICustomer>;
export type ICustomerEmailRaw = ICustomerEmail<ICustomer>;
export type ICustomerPhoneRaw = ICustomerPhone<ICustomer>;

export interface ICustomerAccount<TCustomer extends IID = IID>
  extends IBaseEntity {
  balance: number;
  customer: TCustomer;
}

export interface ICustomerAccountRaw extends ICustomerAccount<ICustomer> {}
