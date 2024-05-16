import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserEmailService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserEmailToolbarComponent } from '../../toolbars';
import {
  USER_EMAIL_COLUMNS,
  USER_EMAIL_DISPLAY_COLUMNS,
  USER_EMAIL_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserEmail } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-user-email-table',
  standalone: true,
  imports: [...TableModules, UserEmailToolbarComponent],
  templateUrl: './user-email-table.component.html',
  styleUrl: './user-email-table.component.scss',
  providers: [UserEmailService],
})
export class UserEmailTableComponent extends BaseTableComponent<IUserEmail> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IUserEmail[]>();

  override pageIndex = 0;
  override pageSize = USER_EMAIL_PAGE_SIZE;
  override columns = USER_EMAIL_COLUMNS;
  override displayedColumns = USER_EMAIL_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: UserEmailService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IUserEmail>) {
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
