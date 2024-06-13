import { IBaseEntity } from '@mdtx/common';
import { IProduct } from '../product';

export type SerialNumberStatus = 'in stock' | 'sold' | 'returned';

export interface ISerialNumber extends IBaseEntity {
  serialNumber: string;
  status: SerialNumberStatus;
  product: IProduct;
}
