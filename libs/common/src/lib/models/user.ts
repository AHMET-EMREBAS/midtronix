/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICredential, IName } from './__base';



export interface IPermission extends IName {}

export interface IRole<TPermission> extends IName {
  permissions?: TPermission[];
}

export interface IUser<TRole, TUser> extends ICredential {
  roles?: TRole[];
  supervisor?: TUser;
}
