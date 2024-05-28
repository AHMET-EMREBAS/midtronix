import { Component } from '@angular/core';
import { PermissionViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PermissionViewToolbarComponent } from '../../toolbars';
import {
  PERMISSION_VIEW_COLUMNS,
  PERMISSION_VIEW_DISPLAY_COLUMNS,
  PERMISSION_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPermissionViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-permission-view-table',
  standalone: true,
  imports: [...TableModules, PermissionViewToolbarComponent],
  templateUrl: './permission-view-table.component.html',
  styleUrl: './permission-view-table.component.scss',
  providers: [PermissionViewService],
})
export class PermissionViewTableComponent extends BaseTableComponent<IPermissionViewRaw> {
  override pageIndex = 0;
  override pageSize = PERMISSION_VIEW_PAGE_SIZE;
  override columns = PERMISSION_VIEW_COLUMNS;
  override displayedColumns = PERMISSION_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: PermissionViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
