import { Component } from '@angular/core';
import { CustomerAddressService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerAddressToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_ADDRESS_COLUMNS,
  CUSTOMER_ADDRESS_DISPLAY_COLUMNS,
  CUSTOMER_ADDRESS_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerAddressRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-address-table',
  standalone: true,
  imports: [...TableModules, CustomerAddressToolbarComponent],
  templateUrl: './customer-address-table.component.html',
  styleUrl: './customer-address-table.component.scss',
  providers: [CustomerAddressService],
})
export class CustomerAddressTableComponent extends BaseTableComponent<ICustomerAddressRaw> {
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
}
