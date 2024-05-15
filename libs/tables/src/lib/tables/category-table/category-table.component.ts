import { Component, ViewChild } from '@angular/core';
import { CategoryService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CategoryToolbarComponent } from '../../toolbars';
import {
  CATEGORY_COLUMNS,
  CATEGORY_DISPLAY_COLUMNS,
  CATEGORY_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICategory } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-category-table',
  standalone: true,
  imports: [...TableModules, CategoryToolbarComponent],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss',
  providers: [CategoryService],
})
export class CategoryTableComponent extends BaseTableComponent<ICategory> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = CATEGORY_PAGE_SIZE;
  override columns = CATEGORY_COLUMNS;
  override displayedColumns = CATEGORY_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: CategoryService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ICategory>) {
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
    this.service.clearCache();
    this.service.getWithQuery({
      take: this.pageSize,
      skip: this.pageIndex * this.pageSize,
      search: searchString,
    });
  }

  pageHander(page: PageEvent) {
    this.service.clearCache();
    this.service.getWithQuery({
      take: page.pageSize,
      skip: page.pageIndex * page.pageSize,
    });
  }
}
