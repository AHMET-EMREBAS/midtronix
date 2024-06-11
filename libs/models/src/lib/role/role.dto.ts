/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IRole } from './role';

export type RoleQueryFields = PickKeys<IRole, keyof IRole>;

export interface ICreateRoleDto extends OmitForCreateDto<IRole> {}

export interface IUpdateRoleDto extends Partial<ICreateRoleDto> {}
