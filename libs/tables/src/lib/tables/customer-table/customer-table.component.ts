import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_COLUMNS,
  CUSTOMER_DISPLAY_COLUMNS,
  CUSTOMER_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomer } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-customer-table',
  standalone: true,
  imports: [...TableModules, CustomerToolbarComponent],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss',
  providers: [CustomerService],
})
export class CustomerTableComponent extends BaseTableComponent<ICustomer> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ICustomer[]>();

  override pageIndex = 0;
  override pageSize = CUSTOMER_PAGE_SIZE;
  override columns = CUSTOMER_COLUMNS;
  override displayedColumns = CUSTOMER_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: CustomerService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ICustomer>) {
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
