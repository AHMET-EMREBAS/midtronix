/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IProductView extends IBaseView {
  name: string;
  eid: string;
  serialNumberRequired: boolean;
  brand: string;
  description: string;
  upc: string;
  price: number;
  cost: number;
  quantity: number;
  supplier: string;
  category: string;
}
