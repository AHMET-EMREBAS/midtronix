/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IPermission } from './permission';

export type PermissionQueryFields = PickKeys<IPermission, keyof IPermission>;

export interface ICreatePermissionDto extends OmitForCreateDto<IPermission> {}

export interface IUpdatePermissionDto extends Partial<ICreatePermissionDto> {}
