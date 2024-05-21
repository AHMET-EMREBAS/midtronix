import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { TaxrateService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { TaxrateToolbarComponent } from '../../toolbars';
import {
  TAXRATE_COLUMNS,
  TAXRATE_DISPLAY_COLUMNS,
  TAXRATE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ITaxrateRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-taxrate-table',
  standalone: true,
  imports: [...TableModules, TaxrateToolbarComponent],
  templateUrl: './taxrate-table.component.html',
  styleUrl: './taxrate-table.component.scss',
  providers: [TaxrateService],
})
export class TaxrateTableComponent extends BaseTableComponent<ITaxrateRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<ITaxrateRaw[]>();

  override pageIndex = 0;
  override pageSize = TAXRATE_PAGE_SIZE;
  override columns = TAXRATE_COLUMNS;
  override displayedColumns = TAXRATE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: TaxrateService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, ITaxrateRaw>) {
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
