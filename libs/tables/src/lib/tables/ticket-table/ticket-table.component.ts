import { Component } from '@angular/core';
import { TicketViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { TicketViewToolbarComponent } from '../../toolbars';
import {
  TICKET_VIEW_COLUMNS,
  TICKET_VIEW_DISPLAY_COLUMNS,
  TICKET_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ITicketViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-ticket-view-table',
  standalone: true,
  imports: [...TableModules, TicketViewToolbarComponent],
  templateUrl: './ticket-view-table.component.html',
  styleUrl: './ticket-view-table.component.scss',
  providers: [TicketViewService],
})
export class TicketViewTableComponent extends BaseTableComponent<ITicketViewRaw> {
  override pageIndex = 0;
  override pageSize = TICKET_VIEW_PAGE_SIZE;
  override columns = TICKET_VIEW_COLUMNS;
  override displayedColumns = TICKET_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: TicketViewService, protected readonly router: Router) {
    super(service);
  }
}
