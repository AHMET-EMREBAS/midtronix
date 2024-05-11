/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import { IStore, IStoreAddress, IStoreEmail, IStorePhone } from './store';

export interface ICreateStoreDto extends Omit<IStore, keyof IBaseEntity> {}

export interface ICreateStoreAddress
  extends Omit<IStoreAddress<IID>, keyof IBaseEntity> {}

export interface ICreateStoreEmail
  extends Omit<IStoreEmail<IID>, keyof IBaseEntity> {}

export interface ICreateStorePhone
  extends Omit<IStorePhone<IID>, keyof IBaseEntity> {}
