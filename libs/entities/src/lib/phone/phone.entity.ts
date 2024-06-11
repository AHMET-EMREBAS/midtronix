import { IPhone } from '@mdtx/models';
import { BaseEntity, Entity, OwnerRelation, StringColumn } from '@mdtx/core';
import { User } from '../user';

@Entity()
export class Phone extends BaseEntity implements IPhone {
  @StringColumn()
  phone!: string;

  @OwnerRelation(User)
  user!: User;
}
