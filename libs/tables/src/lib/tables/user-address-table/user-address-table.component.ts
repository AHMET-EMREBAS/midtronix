import { Component } from '@angular/core';
import { UserAddressService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserAddressToolbarComponent } from '../../toolbars';
import {
  USER_ADDRESS_COLUMNS,
  USER_ADDRESS_DISPLAY_COLUMNS,
  USER_ADDRESS_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserAddressRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-user-address-table',
  standalone: true,
  imports: [...TableModules, UserAddressToolbarComponent],
  templateUrl: './user-address-table.component.html',
  styleUrl: './user-address-table.component.scss',
  providers: [UserAddressService],
})
export class UserAddressTableComponent extends BaseTableComponent<IUserAddressRaw> {
  override pageIndex = 0;
  override pageSize = USER_ADDRESS_PAGE_SIZE;
  override columns = USER_ADDRESS_COLUMNS;
  override displayedColumns = USER_ADDRESS_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: UserAddressService, protected readonly router: Router) {
    super(service);
  }
}
