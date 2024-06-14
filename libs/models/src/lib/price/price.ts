import { IBaseEntity } from '@mdtx/common';
import { IPriceLevel } from '../price-level';
import { ISku } from '../sku';

export interface IPrice extends IBaseEntity {
  cost: number;
  price: number;
  priceLevel: IPriceLevel;
  sku: ISku;
}
