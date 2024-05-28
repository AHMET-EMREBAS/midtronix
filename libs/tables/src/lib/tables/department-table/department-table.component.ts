import { Component } from '@angular/core';
import { DepartmentViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { DepartmentViewToolbarComponent } from '../../toolbars';
import {
  DEPARTMENT_VIEW_COLUMNS,
  DEPARTMENT_VIEW_DISPLAY_COLUMNS,
  DEPARTMENT_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IDepartmentViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-department-view-table',
  standalone: true,
  imports: [...TableModules, DepartmentViewToolbarComponent],
  templateUrl: './department-view-table.component.html',
  styleUrl: './department-view-table.component.scss',
  providers: [DepartmentViewService],
})
export class DepartmentViewTableComponent extends BaseTableComponent<IDepartmentViewRaw> {
  override pageIndex = 0;
  override pageSize = DEPARTMENT_VIEW_PAGE_SIZE;
  override columns = DEPARTMENT_VIEW_COLUMNS;
  override displayedColumns = DEPARTMENT_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: DepartmentViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
