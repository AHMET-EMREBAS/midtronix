import { IProduct, ISku } from '@mdtx/models';
import {
  BaseEntity,
  UniqueColumn,
  Entity,
  StringColumn,
  OwnerRelation,
} from '@mdtx/core';
import { Product } from '../product';

@Entity()
export class Sku extends BaseEntity implements ISku {
  @UniqueColumn() name!: string;
  @UniqueColumn() sku!: string;

  @StringColumn() description!: string;

  @OwnerRelation(Product, { eager: true }) product!: IProduct;
}
