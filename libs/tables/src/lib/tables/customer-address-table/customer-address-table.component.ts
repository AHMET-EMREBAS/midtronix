import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { CustomerAddressService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerAddressToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_ADDRESS_COLUMNS,
  CUSTOMER_ADDRESS_DISPLAY_COLUMNS,
  CUSTOMER_ADDRESS_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerAddressRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-customer-address-table',
  standalone: true,
  imports: [...TableModules, CustomerAddressToolbarComponent],
  templateUrl: './customer-address-table.component.html',
  styleUrl: './customer-address-table.component.scss',
  providers: [CustomerAddressService],
})
export class CustomerAddressTableComponent extends BaseTableComponent<ICustomerAddressRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ICustomerAddressRaw[]>();

  override pageIndex = 0;
  override pageSize = CUSTOMER_ADDRESS_PAGE_SIZE;
  override columns = CUSTOMER_ADDRESS_COLUMNS;
  override displayedColumns = CUSTOMER_ADDRESS_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: CustomerAddressService,
    protected readonly router: Router
  ) {
    super(service);
  }

  selectItems(items: Map<string, ICustomerAddressRaw>) {
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
