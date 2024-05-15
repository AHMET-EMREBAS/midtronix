import { Component, ViewChild } from '@angular/core';
import { ProductService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductToolbarComponent } from '../../toolbars';
import {
  PRODUCT_COLUMNS,
  PRODUCT_DISPLAY_COLUMNS,
  PRODUCT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProduct } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-product-table',
  standalone: true,
  imports: [...TableModules, ProductToolbarComponent],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
  providers: [ProductService],
})
export class ProductTableComponent extends BaseTableComponent<IProduct> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = PRODUCT_PAGE_SIZE;
  override columns = PRODUCT_COLUMNS;
  override displayedColumns = PRODUCT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProductService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IProduct>) {
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
