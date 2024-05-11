/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import { IPermission, IRole } from './role';

export interface ICreateRoleDto extends Omit<IRole<IID>, keyof IBaseEntity> {}

export interface ICreatePermissionDto
  extends Omit<IPermission, keyof IBaseEntity> {}
