import { Component } from '@angular/core';
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
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-phone-table',
  standalone: true,
  imports: [...TableModules, CustomerPhoneToolbarComponent],
  templateUrl: './customer-phone-table.component.html',
  styleUrl: './customer-phone-table.component.scss',
  providers: [CustomerPhoneService],
})
export class CustomerPhoneTableComponent extends BaseTableComponent<ICustomerPhoneRaw> {
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
}
