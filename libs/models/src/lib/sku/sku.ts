import { IBaseEntity } from '@mdtx/common';
import { IProduct } from '../product';
export interface ISku extends IBaseEntity {
  name: string;
  description: string;
  sku: string;
  product: IProduct;
}
