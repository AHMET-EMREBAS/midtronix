import { Component, ViewChild } from '@angular/core';
import { ProjectService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProjectToolbarComponent } from '../../toolbars';
import {
  PROJECT_COLUMNS,
  PROJECT_DISPLAY_COLUMNS,
  PROJECT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProject } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-project-table',
  standalone: true,
  imports: [...TableModules, ProjectToolbarComponent],
  templateUrl: './project-table.component.html',
  styleUrl: './project-table.component.scss',
  providers: [ProjectService],
})
export class ProjectTableComponent extends BaseTableComponent<IProject> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = PROJECT_PAGE_SIZE;
  override columns = PROJECT_COLUMNS;
  override displayedColumns = PROJECT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProjectService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IProject>) {
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

  pageHandler(page: PageEvent) {
    this.service.clearCache();
    this.service.getWithQuery({
      take: page.pageSize,
      skip: page.pageIndex * page.pageSize,
    });
  }
}
