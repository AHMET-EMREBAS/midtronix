import { IPriceLevel } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class PriceLevel extends BaseEntity implements IPriceLevel {
  @UniqueColumn()
  name!: string;
}
