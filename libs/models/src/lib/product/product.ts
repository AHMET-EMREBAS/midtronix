import { IBaseEntity } from '@mdtx/common';
import { ISupplier } from '../supplier';
import { ICategory } from '../category';

export interface IProduct extends IBaseEntity {
  name: string;

  serialNumberRequired: boolean;
  autoGenerateSerial: boolean;

  brand: string;

  description: string;

  upc: string;

  price: number;

  cost: number;

  quantity: number;

  supplier: ISupplier;

  category: ICategory;
}
