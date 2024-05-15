import { ITicket } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { TICKET_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class TicketService extends CollectionBaseService<ITicket> {
  static readonly ENTITY_NAME = 'Ticket';
  static readonly ENTITY_PLURAL_NAME = 'Tickets';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Ticket', factory, httpClient, TICKET_OPTION_COLUMN);
  }
}
