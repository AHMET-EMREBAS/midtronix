import { Component, ViewChild } from '@angular/core';
import { CustomerEmailService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerEmailToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_EMAIL_COLUMNS,
  CUSTOMER_EMAIL_DISPLAY_COLUMNS,
  CUSTOMER_EMAIL_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerEmail } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-customer-email-table',
  standalone: true,
  imports: [...TableModules, CustomerEmailToolbarComponent],
  templateUrl: './customer-email-table.component.html',
  styleUrl: './customer-email-table.component.scss',
  providers: [CustomerEmailService],
})
export class CustomerEmailTableComponent extends BaseTableComponent<ICustomerEmail> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = CUSTOMER_EMAIL_PAGE_SIZE;
  override columns = CUSTOMER_EMAIL_COLUMNS;
  override displayedColumns = CUSTOMER_EMAIL_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: CustomerEmailService,
    protected readonly router: Router
  ) {
    super(service);
  }

  selectItems(items: Map<string, ICustomerEmail>) {
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

  pageHander(page: PageEvent) {
    this.service.clearCache();
    this.service.getWithQuery({
      take: page.pageSize,
      skip: page.pageIndex * page.pageSize,
    });
  }
}
