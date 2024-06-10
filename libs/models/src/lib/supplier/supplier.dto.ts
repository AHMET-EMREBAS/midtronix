/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys } from '@mdtx/common';
import { ISupplier } from './supplier';

export type SupplierQueryFields = PickKeys<ISupplier, keyof ISupplier>;

export interface ICreateSupplierDto
  extends Pick<ISupplier, 'name' | 'active'> {}

export interface IUpdateSupplierDto extends Partial<ICreateSupplierDto> {}
