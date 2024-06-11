import { IAddress, IUser } from '@mdtx/models';
import { BaseEntity, Entity, StringColumn, OwnerRelation } from '@mdtx/core';
import { User } from '../user';

@Entity()
export class Address extends BaseEntity implements IAddress {
  @StringColumn() street!: string;
  @StringColumn() city!: string;
  @StringColumn() state!: string;
  @StringColumn() country!: string;
  @StringColumn() zip!: string;
  @OwnerRelation(User) user!: IUser;
}
