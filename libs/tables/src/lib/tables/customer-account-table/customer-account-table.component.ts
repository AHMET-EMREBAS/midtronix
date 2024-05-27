import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { CustomerAccountService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerAccountToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_ACCOUNT_COLUMNS,
  CUSTOMER_ACCOUNT_DISPLAY_COLUMNS,
  CUSTOMER_ACCOUNT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerAccountRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-customer-account-table',
  standalone: true,
  imports: [...TableModules, CustomerAccountToolbarComponent],
  templateUrl: './customer-account-table.component.html',
  styleUrl: './customer-account-table.component.scss',
  providers: [CustomerAccountService],
})
export class CustomerAccountTableComponent extends BaseTableComponent<ICustomerAccountRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ICustomerAccountRaw[]>();

  override pageIndex = 0;
  override pageSize = CUSTOMER_ACCOUNT_PAGE_SIZE;
  override columns = CUSTOMER_ACCOUNT_COLUMNS;
  override displayedColumns = CUSTOMER_ACCOUNT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: CustomerAccountService,
    protected readonly router: Router
  ) {
    super(service);
  }

  selectItems(items: Map<string, ICustomerAccountRaw>) {
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
