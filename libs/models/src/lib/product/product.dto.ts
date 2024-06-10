/* eslint-disable @typescript-eslint/no-empty-interface */
import { OmitForCreateDto, PickKeys } from '@mdtx/common';
import { IProduct } from './product';

export type ProductQueryFields = PickKeys<IProduct, keyof IProduct>;

export interface ICreateProductDto extends OmitForCreateDto<IProduct> {}

export interface IUpdateProductDto extends Partial<ICreateProductDto> {}
