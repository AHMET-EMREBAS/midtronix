import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { CustomerRoleService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerRoleToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_ROLE_COLUMNS,
  CUSTOMER_ROLE_DISPLAY_COLUMNS,
  CUSTOMER_ROLE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerRoleRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-customer-role-table',
  standalone: true,
  imports: [...TableModules, CustomerRoleToolbarComponent],
  templateUrl: './customer-role-table.component.html',
  styleUrl: './customer-role-table.component.scss',
  providers: [CustomerRoleService],
})
export class CustomerRoleTableComponent extends BaseTableComponent<ICustomerRoleRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ICustomerRoleRaw[]>();

  override pageIndex = 0;
  override pageSize = CUSTOMER_ROLE_PAGE_SIZE;
  override columns = CUSTOMER_ROLE_COLUMNS;
  override displayedColumns = CUSTOMER_ROLE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: CustomerRoleService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ICustomerRoleRaw>) {
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
