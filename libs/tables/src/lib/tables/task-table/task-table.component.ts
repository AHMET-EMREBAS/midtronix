import { Component } from '@angular/core';
import { TaskViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { TaskViewToolbarComponent } from '../../toolbars';
import {
  TASK_VIEW_COLUMNS,
  TASK_VIEW_DISPLAY_COLUMNS,
  TASK_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ITaskViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-task-view-table',
  standalone: true,
  imports: [...TableModules, TaskViewToolbarComponent],
  templateUrl: './task-view-table.component.html',
  styleUrl: './task-view-table.component.scss',
  providers: [TaskViewService],
})
export class TaskViewTableComponent extends BaseTableComponent<ITaskViewRaw> {
  override pageIndex = 0;
  override pageSize = TASK_VIEW_PAGE_SIZE;
  override columns = TASK_VIEW_COLUMNS;
  override displayedColumns = TASK_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: TaskViewService, protected readonly router: Router) {
    super(service);
  }
}
