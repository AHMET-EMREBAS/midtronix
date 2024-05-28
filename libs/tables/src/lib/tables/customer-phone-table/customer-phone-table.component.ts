import { Component } from '@angular/core';
import { CustomerPhoneViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerPhoneViewToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_PHONE_COLUMNS,
  CUSTOMER_PHONE_DISPLAY_COLUMNS,
  CUSTOMER_PHONE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerPhoneViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-phone-view-table',
  standalone: true,
  imports: [...TableModules, CustomerPhoneViewToolbarComponent],
  templateUrl: './customer-phone-view-table.component.html',
  styleUrl: './customer-phone-view-table.component.scss',
  providers: [CustomerPhoneViewService],
})
export class CustomerPhoneViewTableComponent extends BaseTableComponent<ICustomerPhoneViewRaw> {
  override pageIndex = 0;
  override pageSize = CUSTOMER_PHONE_PAGE_SIZE;
  override columns = CUSTOMER_PHONE_COLUMNS;
  override displayedColumns = CUSTOMER_PHONE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: CustomerPhoneViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
