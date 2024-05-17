import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { SkuService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { SkuToolbarComponent } from '../../toolbars';
import {
  SKU_COLUMNS,
  SKU_DISPLAY_COLUMNS,
  SKU_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ISkuRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-sku-table',
  standalone: true,
  imports: [...TableModules, SkuToolbarComponent],
  templateUrl: './sku-table.component.html',
  styleUrl: './sku-table.component.scss',
  providers: [SkuService],
})
export class SkuTableComponent extends BaseTableComponent<ISkuRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ISkuRaw[]>();

  override pageIndex = 0;
  override pageSize = SKU_PAGE_SIZE;
  override columns = SKU_COLUMNS;
  override displayedColumns = SKU_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: SkuService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ISkuRaw>) {
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
