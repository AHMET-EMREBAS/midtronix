import { Component, ViewChild } from '@angular/core';
import { SkuService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { SkuToolbarComponent } from '../../toolbars';
import {
  SKU_COLUMNS,
  SKU_DISPLAY_COLUMNS,
  SKU_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ISku } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-sku-table',
  standalone: true,
  imports: [...TableModules, SkuToolbarComponent],
  templateUrl: './sku-table.component.html',
  styleUrl: './sku-table.component.scss',
  providers: [SkuService],
})
export class SkuTableComponent extends BaseTableComponent<ISku> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = SKU_PAGE_SIZE;
  override columns = SKU_COLUMNS;
  override displayedColumns = SKU_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: SkuService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ISku>) {
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
