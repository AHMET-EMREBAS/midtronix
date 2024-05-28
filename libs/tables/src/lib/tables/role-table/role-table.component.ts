import { Component } from '@angular/core';
import { RoleService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { RoleToolbarComponent } from '../../toolbars';
import {
  ROLE_COLUMNS,
  ROLE_DISPLAY_COLUMNS,
  ROLE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IRoleRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-role-table',
  standalone: true,
  imports: [...TableModules, RoleToolbarComponent],
  templateUrl: './role-table.component.html',
  styleUrl: './role-table.component.scss',
  providers: [RoleService],
})
export class RoleTableComponent extends BaseTableComponent<IRoleRaw> {
  override pageIndex = 0;
  override pageSize = ROLE_PAGE_SIZE;
  override columns = ROLE_COLUMNS;
  override displayedColumns = ROLE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: RoleService, protected readonly router: Router) {
    super(service);
  }
}
