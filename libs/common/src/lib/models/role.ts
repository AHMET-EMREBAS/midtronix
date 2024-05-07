/* eslint-disable @typescript-eslint/no-empty-interface */
import { IName } from './__base';

export interface IPermission extends IName {}

export interface IRole<TPermission> extends IName {
  permissions?: TPermission[];
}
