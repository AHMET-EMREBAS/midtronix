import { Component } from '@angular/core';
import { CustomerViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CustomerViewToolbarComponent } from '../../toolbars';
import {
  CUSTOMER_COLUMNS,
  CUSTOMER_DISPLAY_COLUMNS,
  CUSTOMER_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICustomerViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-customer-view-table',
  standalone: true,
  imports: [...TableModules, CustomerViewToolbarComponent],
  templateUrl: './customer-view-table.component.html',
  styleUrl: './customer-view-table.component.scss',
  providers: [CustomerViewService],
})
export class CustomerViewTableComponent extends BaseTableComponent<ICustomerViewRaw> {
  override pageIndex = 0;
  override pageSize = CUSTOMER_PAGE_SIZE;
  override columns = CUSTOMER_COLUMNS;
  override displayedColumns = CUSTOMER_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: CustomerViewService, protected readonly router: Router) {
    super(service);
  }
}
