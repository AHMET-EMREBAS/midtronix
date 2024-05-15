import { Component, ViewChild } from '@angular/core';
import { CustomerAddressService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerAddressToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_ADDRESS_COLUMNS,
  CUSTOMER_ADDRESS_DISPLAY_COLUMNS,
  CUSTOMER_ADDRESS_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerAddress } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-customer-address-table',
  standalone: true,
  imports: [...TableModules, CustomerAddressToolbarComponent],
  templateUrl: './customer-address-table.component.html',
  styleUrl: './customer-address-table.component.scss',
  providers: [CustomerAddressService],
})
export class CustomerAddressTableComponent extends BaseTableComponent<ICustomerAddress> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

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

  selectItems(items: Map<string, ICustomerAddress>) {
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
