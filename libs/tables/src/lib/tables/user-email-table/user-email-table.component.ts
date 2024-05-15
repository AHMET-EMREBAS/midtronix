import { Component, ViewChild } from '@angular/core';
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
import { MatPaginator } from '@angular/material/paginator';

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
