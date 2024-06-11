import { ICustomer } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class Customer extends BaseEntity implements ICustomer {
  @UniqueColumn()
  name!: string;
}
