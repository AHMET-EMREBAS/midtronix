import { Component } from '@angular/core';
import { UserService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserToolbarComponent } from '../../toolbars';
import {
  USER_COLUMNS,
  USER_DISPLAY_COLUMNS,
  USER_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-user-table',
  standalone: true,
  imports: [...TableModules, UserToolbarComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
  providers: [UserService],
})
export class UserTableComponent extends BaseTableComponent<IUserRaw> {
  override pageIndex = 0;
  override pageSize = USER_PAGE_SIZE;
  override columns = USER_COLUMNS;
  override displayedColumns = USER_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: UserService, protected readonly router: Router) {
    super(service);
  }
}
