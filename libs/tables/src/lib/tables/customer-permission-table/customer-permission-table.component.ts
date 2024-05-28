import { Component } from '@angular/core';
import { CustomerPermissionService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerPermissionToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_PERMISSION_COLUMNS,
  CUSTOMER_PERMISSION_DISPLAY_COLUMNS,
  CUSTOMER_PERMISSION_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerPermissionRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-permission-table',
  standalone: true,
  imports: [...TableModules, CustomerPermissionToolbarComponent],
  templateUrl: './customer-permission-table.component.html',
  styleUrl: './customer-permission-table.component.scss',
  providers: [CustomerPermissionService],
})
export class CustomerPermissionTableComponent extends BaseTableComponent<ICustomerPermissionRaw> {
  override pageIndex = 0;
  override pageSize = CUSTOMER_PERMISSION_PAGE_SIZE;
  override columns = CUSTOMER_PERMISSION_COLUMNS;
  override displayedColumns = CUSTOMER_PERMISSION_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: CustomerPermissionService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
