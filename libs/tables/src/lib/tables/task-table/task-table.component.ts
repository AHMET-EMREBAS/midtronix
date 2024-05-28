import { Component } from '@angular/core';
import { TaskService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { TaskToolbarComponent } from '../../toolbars';
import {
  TASK_COLUMNS,
  TASK_DISPLAY_COLUMNS,
  TASK_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ITaskRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-task-table',
  standalone: true,
  imports: [...TableModules, TaskToolbarComponent],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.scss',
  providers: [TaskService],
})
export class TaskTableComponent extends BaseTableComponent<ITaskRaw> {
  override pageIndex = 0;
  override pageSize = TASK_PAGE_SIZE;
  override columns = TASK_COLUMNS;
  override displayedColumns = TASK_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: TaskService, protected readonly router: Router) {
    super(service);
  }
}
