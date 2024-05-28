import { Component } from '@angular/core';
import { UserAddressViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserAddressViewToolbarComponent } from '../../toolbars';
import {
  USER_ADDRESS_VIEW_COLUMNS,
  USER_ADDRESS_VIEW_DISPLAY_COLUMNS,
  USER_ADDRESS_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserAddressViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-user-address-view-table',
  standalone: true,
  imports: [...TableModules, UserAddressViewToolbarComponent],
  templateUrl: './user-address-view-table.component.html',
  styleUrl: './user-address-view-table.component.scss',
  providers: [UserAddressViewService],
})
export class UserAddressViewTableComponent extends BaseTableComponent<IUserAddressViewRaw> {
  override pageIndex = 0;
  override pageSize = USER_ADDRESS_VIEW_PAGE_SIZE;
  override columns = USER_ADDRESS_VIEW_COLUMNS;
  override displayedColumns = USER_ADDRESS_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: UserAddressViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
