import { IBaseEntity } from '@mdtx/common';
import { ISupplier } from '../supplier';
import { ICategory } from '../category';

export interface IProduct extends IBaseEntity {
  name: string;

  brand: string;

  description: string;

  upc: string;

  price: number;

  cost: number;

  quantity: number;

  supplier: ISupplier;

  category: ICategory;

  serialNumberRequired: boolean;

  autoGenerateSerial: boolean;
}
