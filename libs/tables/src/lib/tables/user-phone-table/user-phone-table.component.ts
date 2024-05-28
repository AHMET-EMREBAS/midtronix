import { Component } from '@angular/core';
import { UserPhoneService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserPhoneToolbarComponent } from '../../toolbars';
import {
  USER_PHONE_COLUMNS,
  USER_PHONE_DISPLAY_COLUMNS,
  USER_PHONE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserPhoneRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-user-phone-table',
  standalone: true,
  imports: [...TableModules, UserPhoneToolbarComponent],
  templateUrl: './user-phone-table.component.html',
  styleUrl: './user-phone-table.component.scss',
  providers: [UserPhoneService],
})
export class UserPhoneTableComponent extends BaseTableComponent<IUserPhoneRaw> {
  override pageIndex = 0;
  override pageSize = USER_PHONE_PAGE_SIZE;
  override columns = USER_PHONE_COLUMNS;
  override displayedColumns = USER_PHONE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: UserPhoneService, protected readonly router: Router) {
    super(service);
  }
}
