/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IPrice } from './price';

export type PriceQueryFields = PickKeys<IPrice, keyof IPrice>;

export interface ICreatePriceDto extends OmitForCreateDto<IPrice> {}

export interface IUpdatePriceDto extends Partial<ICreatePriceDto> {}
