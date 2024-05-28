import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
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
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Component } from '@angular/core';
import { UserEmailViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserEmailViewToolbarComponent } from '../../toolbars';
import {
  USER_EMAIL_VIEW_COLUMNS,
  USER_EMAIL_VIEW_DISPLAY_COLUMNS,
  USER_EMAIL_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserEmailViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-user-email-view-table',
  standalone: true,
  imports: [...TableModules, UserEmailViewToolbarComponent],
  templateUrl: './user-email-view-table.component.html',
  styleUrl: './user-email-view-table.component.scss',
  providers: [UserEmailViewService],
})
export class UserEmailViewTableComponent extends BaseTableComponent<IUserEmailViewRaw> {
  override pageIndex = 0;
  override pageSize = USER_EMAIL_VIEW_PAGE_SIZE;
  override columns = USER_EMAIL_VIEW_COLUMNS;
  override displayedColumns = USER_EMAIL_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: UserEmailViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
