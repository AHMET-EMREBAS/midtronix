import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
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
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-department-table',
  standalone: true,
  imports: [...TableModules, DepartmentToolbarComponent],
  templateUrl: './department-table.component.html',
  styleUrl: './department-table.component.scss',
  providers: [DepartmentService],
})
export class DepartmentTableComponent extends BaseTableComponent<IDepartmentRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IDepartmentRaw[]>();

  override pageIndex = 0;
  override pageSize = DEPARTMENT_PAGE_SIZE;
  override columns = DEPARTMENT_COLUMNS;
  override displayedColumns = DEPARTMENT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: DepartmentService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IDepartmentRaw>) {
    this.selectedItems = [...items.entries()].map(([, value]) => value);
  }

  addItem() {
    this.addEvent.emit();
  }

  deleteSelection() {
    this.deleteEvent.emit(
      [...this.table.selectedItems.entries()].map(([, v]) => v)
    );
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

  pageHandler(page: PageEvent) {
    this.service.clearCache();
    this.service.getWithQuery({
      take: page.pageSize,
      skip: page.pageIndex * page.pageSize,
    });
  }
}
