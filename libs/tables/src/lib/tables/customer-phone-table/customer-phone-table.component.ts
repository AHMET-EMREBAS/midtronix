import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { CustomerPhoneService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerPhoneToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_PHONE_COLUMNS,
  CUSTOMER_PHONE_DISPLAY_COLUMNS,
  CUSTOMER_PHONE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerPhoneRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-customer-phone-table',
  standalone: true,
  imports: [...TableModules, CustomerPhoneToolbarComponent],
  templateUrl: './customer-phone-table.component.html',
  styleUrl: './customer-phone-table.component.scss',
  providers: [CustomerPhoneService],
})
export class CustomerPhoneTableComponent extends BaseTableComponent<ICustomerPhoneRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ICustomerPhoneRaw[]>();

  override pageIndex = 0;
  override pageSize = CUSTOMER_PHONE_PAGE_SIZE;
  override columns = CUSTOMER_PHONE_COLUMNS;
  override displayedColumns = CUSTOMER_PHONE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: CustomerPhoneService,
    protected readonly router: Router
  ) {
    super(service);
  }

  selectItems(items: Map<string, ICustomerPhoneRaw>) {
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
