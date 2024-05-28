import { Component } from '@angular/core';
import { TicketService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { TicketToolbarComponent } from '../../toolbars';
import {
  TICKET_COLUMNS,
  TICKET_DISPLAY_COLUMNS,
  TICKET_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ITicketRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-ticket-table',
  standalone: true,
  imports: [...TableModules, TicketToolbarComponent],
  templateUrl: './ticket-table.component.html',
  styleUrl: './ticket-table.component.scss',
  providers: [TicketService],
})
export class TicketTableComponent extends BaseTableComponent<ITicketRaw> {
  override pageIndex = 0;
  override pageSize = TICKET_PAGE_SIZE;
  override columns = TICKET_COLUMNS;
  override displayedColumns = TICKET_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: TicketService, protected readonly router: Router) {
    super(service);
  }
}
