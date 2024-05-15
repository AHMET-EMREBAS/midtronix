import { Component, ViewChild } from '@angular/core';
import { ProductImageService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductImageToolbarComponent } from '../../toolbars';
import {
  PRODUCT_IMAGE_COLUMNS,
  PRODUCT_IMAGE_DISPLAY_COLUMNS,
  PRODUCT_IMAGE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProductImage } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-product-image-table',
  standalone: true,
  imports: [...TableModules, ProductImageToolbarComponent],
  templateUrl: './product-image-table.component.html',
  styleUrl: './product-image-table.component.scss',
  providers: [ProductImageService],
})
export class ProductImageTableComponent extends BaseTableComponent<IProductImage> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = PRODUCT_IMAGE_PAGE_SIZE;
  override columns = PRODUCT_IMAGE_COLUMNS;
  override displayedColumns = PRODUCT_IMAGE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProductImageService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IProductImage>) {
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
