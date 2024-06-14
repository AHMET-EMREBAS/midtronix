/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IPriceView extends IBaseView {
  eid: number;
  skuId: number;
  priceLevelId: number;
  price: number;
  cost: number;
  sku: string;
  skuName: string;
  priceLevelName: string;
}
