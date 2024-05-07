import { Entity, ManyRelation, OwnerRelation } from '@mdtx/core';
import { NameEntity, ProductCommonEntity } from './__base';
import { IProduct, ISku } from '@mdtx/common';
import { Manufacturer } from './manufacturer';

@Entity()
export class PriceLevel extends NameEntity {}

@Entity()
export class Product
  extends ProductCommonEntity
  implements IProduct<Manufacturer>
{
  @ManyRelation(Manufacturer)
  manufacturers?: Manufacturer[];
}

@Entity()
export class Sku extends ProductCommonEntity implements ISku<Product> {
  @OwnerRelation(Product)
  product!: Product;
}
