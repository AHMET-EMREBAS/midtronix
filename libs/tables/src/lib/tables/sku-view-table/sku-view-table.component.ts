import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { SkuViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { SkuViewToolbarComponent } from '../../toolbars';
import {
  SKU_VIEW_COLUMNS,
  SKU_VIEW_DISPLAY_COLUMNS,
  SKU_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ISkuViewRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-sku-view-table',
  standalone: true,
  imports: [...TableModules, SkuViewToolbarComponent],
  templateUrl: './sku-view-table.component.html',
  styleUrl: './sku-view-table.component.scss',
  providers: [SkuViewService],
})
export class SkuViewTableComponent extends BaseTableComponent<ISkuViewRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ISkuViewRaw[]>();

  override pageIndex = 0;
  override pageSize = SKU_VIEW_PAGE_SIZE;
  override columns = SKU_VIEW_COLUMNS;
  override displayedColumns = SKU_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: SkuViewService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ISkuViewRaw>) {
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
