import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
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
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Component } from '@angular/core';
import { UserPhoneViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { UserPhoneViewToolbarComponent } from '../../toolbars';
import {
  USER_PHONE_VIEW_COLUMNS,
  USER_PHONE_VIEW_DISPLAY_COLUMNS,
  USER_PHONE_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IUserPhoneViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-user-phone-view-table',
  standalone: true,
  imports: [...TableModules, UserPhoneViewToolbarComponent],
  templateUrl: './user-phone-view-table.component.html',
  styleUrl: './user-phone-view-table.component.scss',
  providers: [UserPhoneViewService],
})
export class UserPhoneViewTableComponent extends BaseTableComponent<IUserPhoneViewRaw> {
  override pageIndex = 0;
  override pageSize = USER_PHONE_VIEW_PAGE_SIZE;
  override columns = USER_PHONE_VIEW_COLUMNS;
  override displayedColumns = USER_PHONE_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: UserPhoneViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
