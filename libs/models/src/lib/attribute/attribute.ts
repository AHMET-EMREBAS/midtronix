import { IBaseEntity } from '@mdtx/common';
import { ISku } from '../sku';

export interface IAttribute extends IBaseEntity {
  key: string;
  value: string;
  sku: ISku;
}
