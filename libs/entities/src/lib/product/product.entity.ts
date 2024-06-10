import { ICategory, IProduct, ISupplier } from '@mdtx/models';
import {
  BaseEntity,
  UniqueColumn,
  Entity,
  StringColumn,
  OneRelation,
  NumberColumn,
} from '@mdtx/core';
import { Supplier } from '../supplier';
import { Category } from '../category';

@Entity()
export class Product extends BaseEntity implements IProduct {
  @UniqueColumn() name!: string;
  @UniqueColumn() upc!: string;

  @StringColumn() description!: string;

  @NumberColumn() price!: number;
  @NumberColumn() cost!: number;
  @NumberColumn() quantity!: number;

  @StringColumn() brand!: string;
  @OneRelation(Supplier) supplier!: ISupplier;
  @OneRelation(Category) category!: ICategory;
}
