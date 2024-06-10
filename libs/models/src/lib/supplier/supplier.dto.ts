/* eslint-disable @typescript-eslint/no-empty-interface */
import { OmitForCreateDto, PickKeys } from '@mdtx/common';
import { ISupplier } from './supplier';

export type SupplierQueryFields = PickKeys<ISupplier, keyof ISupplier>;

export interface ICreateSupplierDto extends OmitForCreateDto<ISupplier> {}

export interface IUpdateSupplierDto extends Partial<ICreateSupplierDto> {}
