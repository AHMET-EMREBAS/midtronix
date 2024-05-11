/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import { IAddress, IEmail, IPhone, IUserDetail } from './contact';

export interface ICreateUserDetailDto
  extends Omit<IUserDetail<IID>, keyof IBaseEntity> {}

export interface ICreateAddressDto
  extends Omit<IAddress<IID>, keyof IBaseEntity> {}

export interface ICreatePhoneDto extends Omit<IPhone<IID>, keyof IBaseEntity> {}

export interface ICreateEmailDto extends Omit<IEmail<IID>, keyof IBaseEntity> {}
