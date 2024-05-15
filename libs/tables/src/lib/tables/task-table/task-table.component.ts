import { Component, ViewChild } from '@angular/core';
import { TaskService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { TaskToolbarComponent } from '../../toolbars';
import {
  TASK_COLUMNS,
  TASK_DISPLAY_COLUMNS,
  TASK_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ITask } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-task-table',
  standalone: true,
  imports: [...TableModules, TaskToolbarComponent],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.scss',
  providers: [TaskService],
})
export class TaskTableComponent extends BaseTableComponent<ITask> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = TASK_PAGE_SIZE;
  override columns = TASK_COLUMNS;
  override displayedColumns = TASK_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: TaskService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ITask>) {
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
