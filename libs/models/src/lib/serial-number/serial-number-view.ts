/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';
import { SerialNumberStatus } from './serial-number';

export interface ISerialNumberView extends IBaseView {
  eid: number;
  skuId: number;
  sku: string;
  name: string;
  status: SerialNumberStatus;
  serialNumber: string;
}
