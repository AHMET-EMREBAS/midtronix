/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IAttributeView extends IBaseView {
  key: string;
  value: string;
  sku: string;
  skuId: number;
  skuName: string;
  eid: number;
}
