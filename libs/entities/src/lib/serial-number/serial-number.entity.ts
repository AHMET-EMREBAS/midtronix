import { ISerialNumber, SerialNumberStatus } from '@mdtx/models';
import {
  BaseEntity,
  UniqueColumn,
  Entity,
  StringColumn,
  OneRelation,
} from '@mdtx/core';
import { Sku } from '../sku';

@Entity()
export class SerialNumber extends BaseEntity implements ISerialNumber {
  @UniqueColumn() serialNumber!: string;

  @StringColumn() status!: SerialNumberStatus;

  @OneRelation(Sku) sku!: Sku;
}
