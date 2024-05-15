import { Component, ViewChild } from '@angular/core';
import { ManufacturerService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ManufacturerToolbarComponent } from '../../toolbars';
import {
  MANUFACTURER_COLUMNS,
  MANUFACTURER_DISPLAY_COLUMNS,
  MANUFACTURER_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IManufacturer } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-manufacturer-table',
  standalone: true,
  imports: [...TableModules, ManufacturerToolbarComponent],
  templateUrl: './manufacturer-table.component.html',
  styleUrl: './manufacturer-table.component.scss',
  providers: [ManufacturerService],
})
export class ManufacturerTableComponent extends BaseTableComponent<IManufacturer> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = MANUFACTURER_PAGE_SIZE;
  override columns = MANUFACTURER_COLUMNS;
  override displayedColumns = MANUFACTURER_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ManufacturerService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IManufacturer>) {
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

  pageHander(page: PageEvent) {
    this.service.clearCache();
    this.service.getWithQuery({
      take: page.pageSize,
      skip: page.pageIndex * page.pageSize,
    });
  }
}
