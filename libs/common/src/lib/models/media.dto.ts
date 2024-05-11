/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import { IImage, IMedia, IVideo } from './media';

export interface ICreateMediaDto extends Omit<IMedia<IID>, keyof IBaseEntity> {}
export interface ICreateImageDto extends Omit<IImage<IID>, keyof IBaseEntity> {}
export interface ICreateVideoDto extends Omit<IVideo<IID>, keyof IBaseEntity> {}
