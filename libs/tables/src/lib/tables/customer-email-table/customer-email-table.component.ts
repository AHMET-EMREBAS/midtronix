import { Component } from '@angular/core';
import { CustomerEmailViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerEmailViewToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_EMAIL_VIEW_COLUMNS,
  CUSTOMER_EMAIL_VIEW_DISPLAY_COLUMNS,
  CUSTOMER_EMAIL_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerEmailViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-email-view-table',
  standalone: true,
  imports: [...TableModules, CustomerEmailViewToolbarComponent],
  templateUrl: './customer-email-view-table.component.html',
  styleUrl: './customer-email-view-table.component.scss',
  providers: [CustomerEmailViewService],
})
export class CustomerEmailViewTableComponent extends BaseTableComponent<ICustomerEmailViewRaw> {
  override pageIndex = 0;
  override pageSize = CUSTOMER_EMAIL_VIEW_PAGE_SIZE;
  override columns = CUSTOMER_EMAIL_VIEW_COLUMNS;
  override displayedColumns = CUSTOMER_EMAIL_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: CustomerEmailViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
