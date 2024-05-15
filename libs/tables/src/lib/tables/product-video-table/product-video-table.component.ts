import { Component, ViewChild } from '@angular/core';
import { ProductVideoService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductVideoToolbarComponent } from '../../toolbars';
import {
  PRODUCT_VIDEO_COLUMNS,
  PRODUCT_VIDEO_DISPLAY_COLUMNS,
  PRODUCT_VIDEO_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProductVideo } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-product-video-table',
  standalone: true,
  imports: [...TableModules, ProductVideoToolbarComponent],
  templateUrl: './product-video-table.component.html',
  styleUrl: './product-video-table.component.scss',
  providers: [ProductVideoService],
})
export class ProductVideoTableComponent extends BaseTableComponent<IProductVideo> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = PRODUCT_VIDEO_PAGE_SIZE;
  override columns = PRODUCT_VIDEO_COLUMNS;
  override displayedColumns = PRODUCT_VIDEO_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProductVideoService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IProductVideo>) {
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
