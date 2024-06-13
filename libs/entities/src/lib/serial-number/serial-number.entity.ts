import { ISerialNumber, SerialNumberStatus } from '@mdtx/models';
import {
  BaseEntity,
  UniqueColumn,
  Entity,
  StringColumn,
  OneRelation,
} from '@mdtx/core';
import { Product } from '../product';

@Entity()
export class SerialNumber extends BaseEntity implements ISerialNumber {
  @UniqueColumn() serialNumber!: string;

  @StringColumn() status!: SerialNumberStatus;

  @OneRelation(Product) product!: Product;
}
