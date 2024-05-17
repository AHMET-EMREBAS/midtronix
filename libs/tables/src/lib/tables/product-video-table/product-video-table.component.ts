import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ProductVideoService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductVideoToolbarComponent } from '../../toolbars';
import {
  PRODUCT_VIDEO_COLUMNS,
  PRODUCT_VIDEO_DISPLAY_COLUMNS,
  PRODUCT_VIDEO_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProductVideoRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-product-video-table',
  standalone: true,
  imports: [...TableModules, ProductVideoToolbarComponent],
  templateUrl: './product-video-table.component.html',
  styleUrl: './product-video-table.component.scss',
  providers: [ProductVideoService],
})
export class ProductVideoTableComponent extends BaseTableComponent<IProductVideoRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IProductVideoRaw[]>();

  override pageIndex = 0;
  override pageSize = PRODUCT_VIDEO_PAGE_SIZE;
  override columns = PRODUCT_VIDEO_COLUMNS;
  override displayedColumns = PRODUCT_VIDEO_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProductVideoService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IProductVideoRaw>) {
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
