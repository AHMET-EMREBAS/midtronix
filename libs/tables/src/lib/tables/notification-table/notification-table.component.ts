import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { NotificationService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { NotificationToolbarComponent } from '../../toolbars';
import {
  NOTIFICATION_COLUMNS,
  NOTIFICATION_DISPLAY_COLUMNS,
  NOTIFICATION_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { INotification } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-notification-table',
  standalone: true,
  imports: [...TableModules, NotificationToolbarComponent],
  templateUrl: './notification-table.component.html',
  styleUrl: './notification-table.component.scss',
  providers: [NotificationService],
})
export class NotificationTableComponent extends BaseTableComponent<INotification> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<INotification[]>();

  override pageIndex = 0;
  override pageSize = NOTIFICATION_PAGE_SIZE;
  override columns = NOTIFICATION_COLUMNS;
  override displayedColumns = NOTIFICATION_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: NotificationService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, INotification>) {
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
