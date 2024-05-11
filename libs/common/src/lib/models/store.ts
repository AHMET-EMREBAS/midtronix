/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDescription, IID } from './__base';
import { IAddress, IEmail, IPhone } from './contact';

export interface IStore extends IDescription {}

export interface IStoreAddress<TOwner extends IID> extends IAddress<TOwner> {}

export interface IStoreEmail<TOwner extends IID> extends IEmail<TOwner> {}

export interface IStorePhone<TOwner extends IID> extends IPhone<TOwner> {}
