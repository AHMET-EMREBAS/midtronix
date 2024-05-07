/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID, IName } from './__base';

export interface IPermission extends IName {}

export interface IRole<TPermission extends IID> extends IName {
  permissions?: TPermission[];
}

export interface ICreateRoleDto extends Omit<IRole<IID>, keyof IBaseEntity> {}
