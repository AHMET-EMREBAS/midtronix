import { Component } from '@angular/core';
import { PermissionService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PermissionToolbarComponent } from '../../toolbars';
import {
  PERMISSION_COLUMNS,
  PERMISSION_DISPLAY_COLUMNS,
  PERMISSION_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPermissionRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-permission-table',
  standalone: true,
  imports: [...TableModules, PermissionToolbarComponent],
  templateUrl: './permission-table.component.html',
  styleUrl: './permission-table.component.scss',
  providers: [PermissionService],
})
export class PermissionTableComponent extends BaseTableComponent<IPermissionRaw> {
  override pageIndex = 0;
  override pageSize = PERMISSION_PAGE_SIZE;
  override columns = PERMISSION_COLUMNS;
  override displayedColumns = PERMISSION_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: PermissionService, protected readonly router: Router) {
    super(service);
  }
}
