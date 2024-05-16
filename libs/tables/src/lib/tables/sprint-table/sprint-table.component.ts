import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
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
import { MatPaginator, PageEvent } from '@angular/material/paginator';

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

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ISprint[]>();

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
