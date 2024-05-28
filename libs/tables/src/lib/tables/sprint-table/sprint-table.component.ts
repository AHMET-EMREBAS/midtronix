import { Component } from '@angular/core';
import { SprintViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { SprintViewToolbarComponent } from '../../toolbars';
import {
  SPRINT_VIEW_COLUMNS,
  SPRINT_VIEW_DISPLAY_COLUMNS,
  SPRINT_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ISprintViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-sprint-view-table',
  standalone: true,
  imports: [...TableModules, SprintViewToolbarComponent],
  templateUrl: './sprint-view-table.component.html',
  styleUrl: './sprint-view-table.component.scss',
  providers: [SprintViewService],
})
export class SprintViewTableComponent extends BaseTableComponent<ISprintViewRaw> {
  override pageIndex = 0;
  override pageSize = SPRINT_VIEW_PAGE_SIZE;
  override columns = SPRINT_VIEW_COLUMNS;
  override displayedColumns = SPRINT_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: SprintViewService, protected readonly router: Router) {
    super(service);
  }
}
