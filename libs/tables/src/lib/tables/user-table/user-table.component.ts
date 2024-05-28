import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
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
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Component } from '@angular/core';
import { UserViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserViewToolbarComponent } from '../../toolbars';
import {
  USER_VIEW_COLUMNS,
  USER_VIEW_DISPLAY_COLUMNS,
  USER_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-user-view-table',
  standalone: true,
  imports: [...TableModules, UserViewToolbarComponent],
  templateUrl: './user-view-table.component.html',
  styleUrl: './user-view-table.component.scss',
  providers: [UserViewService],
})
export class UserViewTableComponent extends BaseTableComponent<IUserViewRaw> {
  override pageIndex = 0;
  override pageSize = USER_VIEW_PAGE_SIZE;
  override columns = USER_VIEW_COLUMNS;
  override displayedColumns = USER_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: UserViewService, protected readonly router: Router) {
    super(service);
  }
}
