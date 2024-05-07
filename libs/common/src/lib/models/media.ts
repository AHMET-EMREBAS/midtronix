/* eslint-disable @typescript-eslint/no-empty-interface */
import { IID, IOwner, IUrl } from './__base';

export interface IMedia<TOwner extends IID> extends IUrl, IOwner<TOwner> {}

export interface IImage<TOwner extends IID> extends IMedia<TOwner> {}

export interface IVideo<TOwner extends IID> extends IMedia<TOwner> {}
