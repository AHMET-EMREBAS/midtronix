/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { ISku } from './sku';

export type SkuQueryFields = PickKeys<ISku, keyof ISku>;

export interface ICreateSkuDto extends OmitForCreateDto<ISku> {}

export interface IUpdateSkuDto extends Partial<ICreateSkuDto> {}
