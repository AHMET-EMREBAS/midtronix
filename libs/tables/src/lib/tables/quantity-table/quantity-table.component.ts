import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { QuantityService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { QuantityToolbarComponent } from '../../toolbars';
import {
  QUANTITY_COLUMNS,
  QUANTITY_DISPLAY_COLUMNS,
  QUANTITY_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IQuantityRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-quantity-table',
  standalone: true,
  imports: [...TableModules, QuantityToolbarComponent],
  templateUrl: './quantity-table.component.html',
  styleUrl: './quantity-table.component.scss',
  providers: [QuantityService],
})
export class QuantityTableComponent extends BaseTableComponent<IQuantityRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IQuantityRaw[]>();

  override pageIndex = 0;
  override pageSize = QUANTITY_PAGE_SIZE;
  override columns = QUANTITY_COLUMNS;
  override displayedColumns = QUANTITY_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: QuantityService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IQuantityRaw>) {
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
