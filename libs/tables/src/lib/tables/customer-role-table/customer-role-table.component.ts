import { Component } from '@angular/core';
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
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-role-table',
  standalone: true,
  imports: [...TableModules, CustomerRoleToolbarComponent],
  templateUrl: './customer-role-table.component.html',
  styleUrl: './customer-role-table.component.scss',
  providers: [CustomerRoleService],
})
export class CustomerRoleTableComponent extends BaseTableComponent<ICustomerRoleRaw> {
  override pageIndex = 0;
  override pageSize = CUSTOMER_ROLE_PAGE_SIZE;
  override columns = CUSTOMER_ROLE_COLUMNS;
  override displayedColumns = CUSTOMER_ROLE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: CustomerRoleService, protected readonly router: Router) {
    super(service);
  }
}
