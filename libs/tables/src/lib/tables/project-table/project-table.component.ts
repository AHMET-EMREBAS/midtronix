import { Component } from '@angular/core';
import { ProjectService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProjectToolbarComponent } from '../../toolbars';
import {
  PROJECT_COLUMNS,
  PROJECT_DISPLAY_COLUMNS,
  PROJECT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProjectRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-project-table',
  standalone: true,
  imports: [...TableModules, ProjectToolbarComponent],
  templateUrl: './project-table.component.html',
  styleUrl: './project-table.component.scss',
  providers: [ProjectService],
})
export class ProjectTableComponent extends BaseTableComponent<IProjectRaw> {
  override pageIndex = 0;
  override pageSize = PROJECT_PAGE_SIZE;
  override columns = PROJECT_COLUMNS;
  override displayedColumns = PROJECT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProjectService, protected readonly router: Router) {
    super(service);
  }
}
