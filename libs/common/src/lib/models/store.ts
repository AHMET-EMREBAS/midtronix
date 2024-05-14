/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDescription, IID } from './__base';
import { IAddress, IEmail, IPhone } from './contact';

export interface IStore extends IDescription {}

export interface IStoreAddress<TOwner extends IID = IID> extends IAddress<TOwner> {}

export interface IStoreEmail<TOwner extends IID = IID> extends IEmail<TOwner> {}

export interface IStorePhone<TOwner extends IID = IID> extends IPhone<TOwner> {}
