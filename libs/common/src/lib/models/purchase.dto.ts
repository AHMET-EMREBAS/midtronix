/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity } from './__base';
import { IPurchase } from './purchase';

export interface ICreatePurchaseDto
  extends Omit<IPurchase, keyof IBaseEntity> {}

export interface IUpdatePurchaseDto extends Partial<ICreatePurchaseDto> {}
