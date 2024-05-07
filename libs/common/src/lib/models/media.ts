/* eslint-disable @typescript-eslint/no-empty-interface */
import { IOwner, IUrl } from './__base';

export interface IMedia<TOwner> extends IUrl, IOwner<TOwner> {}

export interface IImage<TOwner> extends IMedia<TOwner> {}

export interface IVideo<TOwner> extends IMedia<TOwner> {}

