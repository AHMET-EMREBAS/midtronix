import { Component } from '@angular/core';
import { UserEmailService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserEmailToolbarComponent } from '../../toolbars';
import {
  USER_EMAIL_COLUMNS,
  USER_EMAIL_DISPLAY_COLUMNS,
  USER_EMAIL_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserEmailRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-user-email-table',
  standalone: true,
  imports: [...TableModules, UserEmailToolbarComponent],
  templateUrl: './user-email-table.component.html',
  styleUrl: './user-email-table.component.scss',
  providers: [UserEmailService],
})
export class UserEmailTableComponent extends BaseTableComponent<IUserEmailRaw> {
  override pageIndex = 0;
  override pageSize = USER_EMAIL_PAGE_SIZE;
  override columns = USER_EMAIL_COLUMNS;
  override displayedColumns = USER_EMAIL_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: UserEmailService, protected readonly router: Router) {
    super(service);
  }
}
