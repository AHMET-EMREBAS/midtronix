import { Component } from '@angular/core';
import { ProjectViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProjectViewToolbarComponent } from '../../toolbars';
import {
  PROJECT_VIEW_COLUMNS,
  PROJECT_VIEW_DISPLAY_COLUMNS,
  PROJECT_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProjectViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-project-view-table',
  standalone: true,
  imports: [...TableModules, ProjectViewToolbarComponent],
  templateUrl: './project-view-table.component.html',
  styleUrl: './project-view-table.component.scss',
  providers: [ProjectViewService],
})
export class ProjectViewTableComponent extends BaseTableComponent<IProjectViewRaw> {
  override pageIndex = 0;
  override pageSize = PROJECT_VIEW_PAGE_SIZE;
  override columns = PROJECT_VIEW_COLUMNS;
  override displayedColumns = PROJECT_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProjectViewService, protected readonly router: Router) {
    super(service);
  }
}
