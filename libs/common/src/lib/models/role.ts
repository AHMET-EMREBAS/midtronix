/* eslint-disable @typescript-eslint/no-empty-interface */
import { IID, IName } from './__base';

export interface IPermission extends IName {}

export interface IRole<TPermission extends IID> extends IName {
  permissions?: TPermission[];
}
