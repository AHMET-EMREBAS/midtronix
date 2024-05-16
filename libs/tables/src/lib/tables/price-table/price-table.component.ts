import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { PriceService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PriceToolbarComponent } from '../../toolbars';
import {
  PRICE_COLUMNS,
  PRICE_DISPLAY_COLUMNS,
  PRICE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPrice } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-price-table',
  standalone: true,
  imports: [...TableModules, PriceToolbarComponent],
  templateUrl: './price-table.component.html',
  styleUrl: './price-table.component.scss',
  providers: [PriceService],
})
export class PriceTableComponent extends BaseTableComponent<IPrice> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IPrice[]>();

  override pageIndex = 0;
  override pageSize = PRICE_PAGE_SIZE;
  override columns = PRICE_COLUMNS;
  override displayedColumns = PRICE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: PriceService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IPrice>) {
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
