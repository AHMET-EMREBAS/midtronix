import { Component, ViewChild } from '@angular/core';
import { UserPhoneService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserPhoneToolbarComponent } from '../../toolbars';
import {
  USER_PHONE_COLUMNS,
  USER_PHONE_DISPLAY_COLUMNS,
  USER_PHONE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserPhone } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-user-phone-table',
  standalone: true,
  imports: [...TableModules, UserPhoneToolbarComponent],
  templateUrl: './user-phone-table.component.html',
  styleUrl: './user-phone-table.component.scss',
  providers: [UserPhoneService],
})
export class UserPhoneTableComponent extends BaseTableComponent<IUserPhone> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = USER_PHONE_PAGE_SIZE;
  override columns = USER_PHONE_COLUMNS;
  override displayedColumns = USER_PHONE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: UserPhoneService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IUserPhone>) {
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
