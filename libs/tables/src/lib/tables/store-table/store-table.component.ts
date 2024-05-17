import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { StoreService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { StoreToolbarComponent } from '../../toolbars';
import {
  STORE_COLUMNS,
  STORE_DISPLAY_COLUMNS,
  STORE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IStoreRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-store-table',
  standalone: true,
  imports: [...TableModules, StoreToolbarComponent],
  templateUrl: './store-table.component.html',
  styleUrl: './store-table.component.scss',
  providers: [StoreService],
})
export class StoreTableComponent extends BaseTableComponent<IStoreRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IStoreRaw[]>();

  override pageIndex = 0;
  override pageSize = STORE_PAGE_SIZE;
  override columns = STORE_COLUMNS;
  override displayedColumns = STORE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: StoreService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IStoreRaw>) {
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
