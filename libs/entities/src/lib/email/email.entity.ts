import { IEmail } from '@mdtx/models';
import { BaseEntity, Entity, OwnerRelation, UniqueColumn } from '@mdtx/core';
import { User } from '../user';

@Entity()
export class Email extends BaseEntity implements IEmail {
  @UniqueColumn()
  email!: string;
  
  @OwnerRelation(User)
  user!: User;
}
