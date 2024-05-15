import { Component, ViewChild } from '@angular/core';
import { StoreService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { StoreToolbarComponent } from '../../toolbars';
import {
  STORE_COLUMNS,
  STORE_DISPLAY_COLUMNS,
  STORE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IStore } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-store-table',
  standalone: true,
  imports: [...TableModules, StoreToolbarComponent],
  templateUrl: './store-table.component.html',
  styleUrl: './store-table.component.scss',
  providers: [StoreService],
})
export class StoreTableComponent extends BaseTableComponent<IStore> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = STORE_PAGE_SIZE;
  override columns = STORE_COLUMNS;
  override displayedColumns = STORE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: StoreService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IStore>) {
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
