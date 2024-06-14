/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IQuantity } from './quantity';

export type QuantityQueryFields = PickKeys<IQuantity, keyof IQuantity>;

export interface ICreateQuantityDto extends OmitForCreateDto<IQuantity> {}

export interface IUpdateQuantityDto extends Partial<ICreateQuantityDto> {}
