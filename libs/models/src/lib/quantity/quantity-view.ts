/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IQuantityView extends IBaseView {
  eid: number;
  quantity: string;
  storeId: number;
  storeName: string;
  skuId: number;
  sku: string;
}
