import { Component, ViewChild } from '@angular/core';
import { UserAddressService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserAddressToolbarComponent } from '../../toolbars';
import {
  USER_ADDRESS_COLUMNS,
  USER_ADDRESS_DISPLAY_COLUMNS,
  USER_ADDRESS_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserAddress } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-user-address-table',
  standalone: true,
  imports: [...TableModules, UserAddressToolbarComponent],
  templateUrl: './user-address-table.component.html',
  styleUrl: './user-address-table.component.scss',
  providers: [UserAddressService],
})
export class UserAddressTableComponent extends BaseTableComponent<IUserAddress> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = USER_ADDRESS_PAGE_SIZE;
  override columns = USER_ADDRESS_COLUMNS;
  override displayedColumns = USER_ADDRESS_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: UserAddressService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IUserAddress>) {
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
