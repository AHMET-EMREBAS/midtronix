import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { CartService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CartToolbarComponent } from '../../toolbars';
import {
  CART_COLUMNS,
  CART_DISPLAY_COLUMNS,
  CART_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICartRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-cart-table',
  standalone: true,
  imports: [...TableModules, CartToolbarComponent],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.scss',
  providers: [CartService],
})
export class CartTableComponent extends BaseTableComponent<ICartRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ICartRaw[]>();

  override pageIndex = 0;
  override pageSize = CART_PAGE_SIZE;
  override columns = CART_COLUMNS;
  override displayedColumns = CART_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: CartService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ICartRaw>) {
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