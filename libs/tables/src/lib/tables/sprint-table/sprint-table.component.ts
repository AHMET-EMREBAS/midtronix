import { Component, ViewChild } from '@angular/core';
import { SprintService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { SprintToolbarComponent } from '../../toolbars';
import {
  SPRINT_COLUMNS,
  SPRINT_DISPLAY_COLUMNS,
  SPRINT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ISprint } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-sprint-table',
  standalone: true,
  imports: [...TableModules, SprintToolbarComponent],
  templateUrl: './sprint-table.component.html',
  styleUrl: './sprint-table.component.scss',
  providers: [SprintService],
})
export class SprintTableComponent extends BaseTableComponent<ISprint> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = SPRINT_PAGE_SIZE;
  override columns = SPRINT_COLUMNS;
  override displayedColumns = SPRINT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: SprintService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ISprint>) {
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
