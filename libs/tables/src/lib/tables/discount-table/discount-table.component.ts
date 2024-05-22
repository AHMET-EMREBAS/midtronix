import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { DiscountService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { DiscountToolbarComponent } from '../../toolbars';
import {
  DISCOUNT_COLUMNS,
  DISCOUNT_DISPLAY_COLUMNS,
  DISCOUNT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IDiscountRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-discount-table',
  standalone: true,
  imports: [...TableModules, DiscountToolbarComponent],
  templateUrl: './discount-table.component.html',
  styleUrl: './discount-table.component.scss',
  providers: [DiscountService],
})
export class DiscountTableComponent extends BaseTableComponent<IDiscountRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IDiscountRaw[]>();

  override pageIndex = 0;
  override pageSize = DISCOUNT_PAGE_SIZE;
  override columns = DISCOUNT_COLUMNS;
  override displayedColumns = DISCOUNT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: DiscountService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IDiscountRaw>) {
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
