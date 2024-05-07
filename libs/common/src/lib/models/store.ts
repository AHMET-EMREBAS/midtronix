/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDescription } from './__base';
import { IAddress, IEmail, IPhone } from './contact';

export interface IStore extends IDescription {}

export interface IStoreAddress<TOwner>
  extends IAddress<TOwner> {}

export interface IStoreEmail<TOwner>
  extends IEmail<TOwner> {}

export interface IStorePhone<TOwner>
  extends IPhone<TOwner> {}
