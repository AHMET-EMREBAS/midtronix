import { Component } from '@angular/core';
import { SprintService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { SprintToolbarComponent } from '../../toolbars';
import {
  SPRINT_COLUMNS,
  SPRINT_DISPLAY_COLUMNS,
  SPRINT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ISprintRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-sprint-table',
  standalone: true,
  imports: [...TableModules, SprintToolbarComponent],
  templateUrl: './sprint-table.component.html',
  styleUrl: './sprint-table.component.scss',
  providers: [SprintService],
})
export class SprintTableComponent extends BaseTableComponent<ISprintRaw> {
  override pageIndex = 0;
  override pageSize = SPRINT_PAGE_SIZE;
  override columns = SPRINT_COLUMNS;
  override displayedColumns = SPRINT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: SprintService, protected readonly router: Router) {
    super(service);
  }
}
