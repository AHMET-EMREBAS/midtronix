import { IPriceLevel } from '@mdtx/models';
import {
  BaseEntity,
  UniqueColumn,
  Entity,
  StringColumn,
  NumberColumn,
} from '@mdtx/core';

@Entity()
export class PriceLevel extends BaseEntity implements IPriceLevel {
  @UniqueColumn()
  name!: string;

  @StringColumn()
  description!: string;

  @NumberColumn()
  taxrate!: number;
}
