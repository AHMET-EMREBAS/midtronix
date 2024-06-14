/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface ISkuView extends IBaseView {
  eid: number;
  name: string;
  description: string;
  sku: string;
  productId: number;
  productName: string;
  productUpc: string;
  serialNumberRequired: boolean;
}
