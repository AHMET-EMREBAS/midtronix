import { CreateCommonTaskEntity } from './__base';
import { Entity, OwnerRelation, Type } from '@mdtx/core';
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

export const TicketEntities: Readonly<Type[]> = [Ticket, Customer, User];
