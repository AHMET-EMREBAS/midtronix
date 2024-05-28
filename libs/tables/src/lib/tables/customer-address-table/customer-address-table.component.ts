import { Component } from '@angular/core';
import { CustomerAddressViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerAddressViewToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_ADDRESS_COLUMNS,
  CUSTOMER_ADDRESS_DISPLAY_COLUMNS,
  CUSTOMER_ADDRESS_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerAddressViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-address-view-table',
  standalone: true,
  imports: [...TableModules, CustomerAddressViewToolbarComponent],
  templateUrl: './customer-address-view-table.component.html',
  styleUrl: './customer-address-view-table.component.scss',
  providers: [CustomerAddressViewService],
})
export class CustomerAddressViewTableComponent extends BaseTableComponent<ICustomerAddressViewRaw> {
  override pageIndex = 0;
  override pageSize = CUSTOMER_ADDRESS_PAGE_SIZE;
  override columns = CUSTOMER_ADDRESS_COLUMNS;
  override displayedColumns = CUSTOMER_ADDRESS_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: CustomerAddressViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
