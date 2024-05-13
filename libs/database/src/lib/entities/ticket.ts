import { CreateCommonTaskEntity } from './__base';
import { Entity, OwnerRelation } from '@mdtx/core';
import { User } from './user';
import { Customer } from './customer';
import { ITicket } from '@mdtx/common';

@Entity()
export class Ticket
  extends CreateCommonTaskEntity(User)
  implements ITicket<User, Customer>
{
  @OwnerRelation(Customer)
  customer!: Customer;
}
