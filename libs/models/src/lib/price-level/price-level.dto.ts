/* eslint-disable @typescript-eslint/no-empty-interface */
import { OmitForCreateDto, PickKeys } from '@mdtx/common';
import { IPriceLevel } from './price-level';

export type PriceLevelQueryFields = PickKeys<IPriceLevel, keyof IPriceLevel>;

export interface ICreatePriceLevelDto extends OmitForCreateDto<IPriceLevel> {}

export interface IUpdatePriceLevelDto extends Partial<ICreatePriceLevelDto> {}