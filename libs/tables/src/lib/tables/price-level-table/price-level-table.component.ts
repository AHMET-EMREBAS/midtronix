import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { PriceLevelService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PriceLevelToolbarComponent } from '../../toolbars';
import {
  PRICE_LEVEL_COLUMNS,
  PRICE_LEVEL_DISPLAY_COLUMNS,
  PRICE_LEVEL_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPriceLevelRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-price-level-table',
  standalone: true,
  imports: [...TableModules, PriceLevelToolbarComponent],
  templateUrl: './price-level-table.component.html',
  styleUrl: './price-level-table.component.scss',
  providers: [PriceLevelService],
})
export class PriceLevelTableComponent extends BaseTableComponent<IPriceLevelRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IPriceLevelRaw[]>();

  override pageIndex = 0;
  override pageSize = PRICE_LEVEL_PAGE_SIZE;
  override columns = PRICE_LEVEL_COLUMNS;
  override displayedColumns = PRICE_LEVEL_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: PriceLevelService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IPriceLevelRaw>) {
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
