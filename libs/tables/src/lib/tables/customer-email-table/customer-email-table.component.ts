import { Component } from '@angular/core';
import { CustomerEmailService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerEmailToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_EMAIL_COLUMNS,
  CUSTOMER_EMAIL_DISPLAY_COLUMNS,
  CUSTOMER_EMAIL_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerEmailRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-email-table',
  standalone: true,
  imports: [...TableModules, CustomerEmailToolbarComponent],
  templateUrl: './customer-email-table.component.html',
  styleUrl: './customer-email-table.component.scss',
  providers: [CustomerEmailService],
})
export class CustomerEmailTableComponent extends BaseTableComponent<ICustomerEmailRaw> {
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
}
