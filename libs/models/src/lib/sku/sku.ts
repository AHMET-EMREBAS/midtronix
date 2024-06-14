import { IBaseEntity } from '@mdtx/common';
import { IProduct } from '../product';

export interface ISku extends IBaseEntity {
  name: string;
  description: string;
  sku: string;
  attributes: Record<string, any>;
  product: IProduct;
}
