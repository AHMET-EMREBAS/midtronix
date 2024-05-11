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

export interface ICreateUserImage
  extends Omit<IUserImage<IID>, keyof IBaseEntity> {}

export interface ICreateUserAddress
  extends Omit<IUserAddress<IID>, keyof IBaseEntity> {}

export interface ICreateUserEmail
  extends Omit<IUserEmail<IID>, keyof IBaseEntity> {}

export interface ICreateUserPhone
  extends Omit<IUserPhone<IID>, keyof IBaseEntity> {}
