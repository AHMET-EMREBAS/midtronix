import { IStore } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class Store extends BaseEntity implements IStore {
  @UniqueColumn()
  name!: string;
}
