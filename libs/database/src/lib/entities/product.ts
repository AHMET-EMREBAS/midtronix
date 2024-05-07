import { Entity, ManyRelation } from '@mdtx/core';
import { NameEntity, ProductCommonEntity } from './__base';
import { IProduct } from '@mdtx/common';
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
