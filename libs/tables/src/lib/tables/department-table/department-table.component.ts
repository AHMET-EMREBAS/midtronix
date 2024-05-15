import { Component, ViewChild } from '@angular/core';
import { DepartmentService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { DepartmentToolbarComponent } from '../../toolbars';
import {
  DEPARTMENT_COLUMNS,
  DEPARTMENT_DISPLAY_COLUMNS,
  DEPARTMENT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IDepartment } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-department-table',
  standalone: true,
  imports: [...TableModules, DepartmentToolbarComponent],
  templateUrl: './department-table.component.html',
  styleUrl: './department-table.component.scss',
  providers: [DepartmentService],
})
export class DepartmentTableComponent extends BaseTableComponent<IDepartment> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = DEPARTMENT_PAGE_SIZE;
  override columns = DEPARTMENT_COLUMNS;
  override displayedColumns = DEPARTMENT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: DepartmentService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IDepartment>) {
    this.selectedItems = [...items.entries()].map(([, value]) => value);
  }

  addItem() {
    this.router.navigate(['create']);
  }

  deleteSelection() {
    for (const [key] of this.table.selectedItems) {
      this.service.delete(key);
    }
    this.table.selectedItems.clear();
  }

  filterItems(searchString: string) {
    console.log('Searching : ', searchString);
    this.service.clearCache();
    this.service.getWithQuery({
      take: this.pageSize,
      skip: this.pageIndex * this.pageSize,
      search: searchString,
    });
  }
}
