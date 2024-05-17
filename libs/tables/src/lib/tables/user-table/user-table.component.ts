import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserToolbarComponent } from '../../toolbars';
import {
  USER_COLUMNS,
  USER_DISPLAY_COLUMNS,
  USER_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-user-table',
  standalone: true,
  imports: [...TableModules, UserToolbarComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
  providers: [UserService],
})
export class UserTableComponent extends BaseTableComponent<IUserRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IUserRaw[]>();

  override pageIndex = 0;
  override pageSize = USER_PAGE_SIZE;
  override columns = USER_COLUMNS;
  override displayedColumns = USER_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: UserService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IUserRaw>) {
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
