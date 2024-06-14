import { IBaseEntity } from '@mdtx/common';
import { ISku } from '../sku';

export type SerialNumberStatus = 'in stock' | 'sold' | 'returned';

export interface ISerialNumber extends IBaseEntity {
  serialNumber: string;
  status: SerialNumberStatus;
  sku: ISku;
}
