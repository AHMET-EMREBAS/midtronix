/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IProductView extends IBaseView {
  name: string;
  productId: string;
  brand: string;
  description: string;
  upc: string;
  price: string;
  cost: string;
  quantity: string;
  supplier: string;
  category: string;
}
