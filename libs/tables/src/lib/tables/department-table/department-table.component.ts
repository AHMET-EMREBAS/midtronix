import { Component } from '@angular/core';
import { DepartmentService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { DepartmentToolbarComponent } from '../../toolbars';
import {
  DEPARTMENT_COLUMNS,
  DEPARTMENT_DISPLAY_COLUMNS,
  DEPARTMENT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IDepartmentRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-department-table',
  standalone: true,
  imports: [...TableModules, DepartmentToolbarComponent],
  templateUrl: './department-table.component.html',
  styleUrl: './department-table.component.scss',
  providers: [DepartmentService],
})
export class DepartmentTableComponent extends BaseTableComponent<IDepartmentRaw> {
  override pageIndex = 0;
  override pageSize = DEPARTMENT_PAGE_SIZE;
  override columns = DEPARTMENT_COLUMNS;
  override displayedColumns = DEPARTMENT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: DepartmentService, protected readonly router: Router) {
    super(service);
  }
}
