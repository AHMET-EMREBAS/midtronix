/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys } from '@mdtx/common';
import { IPriceLevel } from './price-level';

export type PriceLevelQueryFields = PickKeys<IPriceLevel, keyof IPriceLevel>;

export interface ICreatePriceLevelDto
  extends Pick<IPriceLevel, 'name' | 'active'> {}

export interface IUpdatePriceLevelDto extends Partial<ICreatePriceLevelDto> {}
