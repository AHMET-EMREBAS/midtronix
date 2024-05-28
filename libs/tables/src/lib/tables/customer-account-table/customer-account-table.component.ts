import { Component } from '@angular/core';
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
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-account-table',
  standalone: true,
  imports: [...TableModules, CustomerAccountToolbarComponent],
  templateUrl: './customer-account-table.component.html',
  styleUrl: './customer-account-table.component.scss',
  providers: [CustomerAccountService],
})
export class CustomerAccountTableComponent extends BaseTableComponent<ICustomerAccountRaw> {
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
}
