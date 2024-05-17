import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
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
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-ticket-table',
  standalone: true,
  imports: [...TableModules, TicketToolbarComponent],
  templateUrl: './ticket-table.component.html',
  styleUrl: './ticket-table.component.scss',
  providers: [TicketService],
})
export class TicketTableComponent extends BaseTableComponent<ITicketRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ITicketRaw[]>();

  override pageIndex = 0;
  override pageSize = TICKET_PAGE_SIZE;
  override columns = TICKET_COLUMNS;
  override displayedColumns = TICKET_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: TicketService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ITicketRaw>) {
    this.selectedItems = [...items.entries()].map(([, value]) => value);
  }

  addItem() {
    this.addEvent.emit();
  }

  deleteSelection() {
    this.deleteEvent.emit(
      [...this.table.selectedItems.entries()].map(([, v]) => v)
    );
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

  pageHandler(page: PageEvent) {
    this.service.clearCache();
    this.service.getWithQuery({
      take: page.pageSize,
      skip: page.pageIndex * page.pageSize,
    });
  }
}
