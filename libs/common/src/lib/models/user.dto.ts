/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import {
  IUser,
  IUserAddress,
  IUserEmail,
  IUserImage,
  IUserPhone,
} from './user';

export interface ICreateUserDto
  extends Omit<IUser<IID, IID>, keyof IBaseEntity> {}

export interface ICreateUserImageDto
  extends Omit<IUserImage<IID>, keyof IBaseEntity> {}

export interface ICreateUserAddressDto
  extends Omit<IUserAddress<IID>, keyof IBaseEntity> {}

export interface ICreateUserEmailDto
  extends Omit<IUserEmail<IID>, keyof IBaseEntity> {}

export interface ICreateUserPhoneDto
  extends Omit<IUserPhone<IID>, keyof IBaseEntity> {}
