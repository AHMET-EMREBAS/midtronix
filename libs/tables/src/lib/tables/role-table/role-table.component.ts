import { Component } from '@angular/core';
import { RoleViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { RoleViewToolbarComponent } from '../../toolbars';
import {
  ROLE_VIEW_COLUMNS,
  ROLE_VIEW_DISPLAY_COLUMNS,
  ROLE_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IRoleViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-role-view-table',
  standalone: true,
  imports: [...TableModules, RoleViewToolbarComponent],
  templateUrl: './role-view-table.component.html',
  styleUrl: './role-view-table.component.scss',
  providers: [RoleViewService],
})
export class RoleViewTableComponent extends BaseTableComponent<IRoleViewRaw> {
  override pageIndex = 0;
  override pageSize = ROLE_VIEW_PAGE_SIZE;
  override columns = ROLE_VIEW_COLUMNS;
  override displayedColumns = ROLE_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: RoleViewService, protected readonly router: Router) {
    super(service);
  }
}
