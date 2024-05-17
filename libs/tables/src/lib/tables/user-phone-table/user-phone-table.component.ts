import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserPhoneService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserPhoneToolbarComponent } from '../../toolbars';
import {
  USER_PHONE_COLUMNS,
  USER_PHONE_DISPLAY_COLUMNS,
  USER_PHONE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserPhoneRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-user-phone-table',
  standalone: true,
  imports: [...TableModules, UserPhoneToolbarComponent],
  templateUrl: './user-phone-table.component.html',
  styleUrl: './user-phone-table.component.scss',
  providers: [UserPhoneService],
})
export class UserPhoneTableComponent extends BaseTableComponent<IUserPhoneRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IUserPhoneRaw[]>();

  override pageIndex = 0;
  override pageSize = USER_PHONE_PAGE_SIZE;
  override columns = USER_PHONE_COLUMNS;
  override displayedColumns = USER_PHONE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: UserPhoneService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IUserPhoneRaw>) {
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
