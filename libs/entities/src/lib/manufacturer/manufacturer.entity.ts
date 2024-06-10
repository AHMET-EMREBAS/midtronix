import { IManufacturer } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class Manufacturer extends BaseEntity implements IManufacturer {
  @UniqueColumn()
  name!: string;
  
  @StringColumn()
  description!: string;
}
