import { IBaseEntity } from '@mdtx/common';
import { IStore } from '../store';
import { ISku } from '../sku';

export interface IQuantity extends IBaseEntity {
  quantity: number;
  store: IStore;
  sku: ISku;
}
