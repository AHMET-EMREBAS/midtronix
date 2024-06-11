/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IUser } from './user';

export type UserQueryFields = PickKeys<IUser, keyof IUser>;

export interface ICreateUserDto extends OmitForCreateDto<IUser> {}

export interface IUpdateUserDto extends Partial<ICreateUserDto> {}
