import { Component, ViewChild } from '@angular/core';
import { CustomerPhoneService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerPhoneToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_PHONE_COLUMNS,
  CUSTOMER_PHONE_DISPLAY_COLUMNS,
  CUSTOMER_PHONE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerPhone } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-customer-phone-table',
  standalone: true,
  imports: [...TableModules, CustomerPhoneToolbarComponent],
  templateUrl: './customer-phone-table.component.html',
  styleUrl: './customer-phone-table.component.scss',
  providers: [CustomerPhoneService],
})
export class CustomerPhoneTableComponent extends BaseTableComponent<ICustomerPhone> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

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

  selectItems(items: Map<string, ICustomerPhone>) {
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
