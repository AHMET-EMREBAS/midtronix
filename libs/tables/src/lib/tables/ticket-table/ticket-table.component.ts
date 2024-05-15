import { Component, ViewChild } from '@angular/core';
import { TicketService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { TicketToolbarComponent } from '../../toolbars';
import {
  TICKET_COLUMNS,
  TICKET_DISPLAY_COLUMNS,
  TICKET_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ITicket } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-ticket-table',
  standalone: true,
  imports: [...TableModules, TicketToolbarComponent],
  templateUrl: './ticket-table.component.html',
  styleUrl: './ticket-table.component.scss',
  providers: [TicketService],
})
export class TicketTableComponent extends BaseTableComponent<ITicket> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = TICKET_PAGE_SIZE;
  override columns = TICKET_COLUMNS;
  override displayedColumns = TICKET_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: TicketService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ITicket>) {
    this.selectedItems = [...items.entries()].map(([, value]) => value);
  }

  addItem() {
    this.router.navigate(['create']);
  }

  deleteSelection() {
    for (const [key] of this.table.selectedItems) {
      this.service.delete(key);
    }
    this.table.selectedItems.clear();
  }

  filterItems(searchString: string) {
    console.log('Searching : ', searchString);
    this.service.clearCache();
    this.service.getWithQuery({
      take: this.pageSize,
      skip: this.pageIndex * this.pageSize,
      search: searchString,
    });
  }
}
