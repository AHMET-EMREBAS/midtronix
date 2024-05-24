/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity } from './__base';
import { ISale } from './sale';

export interface ICreateSaleDto extends Omit<ISale, keyof IBaseEntity> {}

export interface IUpdateSaleDto extends Partial<ICreateSaleDto> {}
