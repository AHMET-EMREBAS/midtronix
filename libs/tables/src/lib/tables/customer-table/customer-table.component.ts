import { Component } from '@angular/core';
import { CustomerService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_COLUMNS,
  CUSTOMER_DISPLAY_COLUMNS,
  CUSTOMER_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-table',
  standalone: true,
  imports: [...TableModules, CustomerToolbarComponent],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss',
  providers: [CustomerService],
})
export class CustomerTableComponent extends BaseTableComponent<ICustomerRaw> {
  override pageIndex = 0;
  override pageSize = CUSTOMER_PAGE_SIZE;
  override columns = CUSTOMER_COLUMNS;
  override displayedColumns = CUSTOMER_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: CustomerService, protected readonly router: Router) {
    super(service);
  }
}
