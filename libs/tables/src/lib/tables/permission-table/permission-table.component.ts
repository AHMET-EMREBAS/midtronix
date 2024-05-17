import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { PermissionService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PermissionToolbarComponent } from '../../toolbars';
import {
  PERMISSION_COLUMNS,
  PERMISSION_DISPLAY_COLUMNS,
  PERMISSION_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPermissionRaw } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-permission-table',
  standalone: true,
  imports: [...TableModules, PermissionToolbarComponent],
  templateUrl: './permission-table.component.html',
  styleUrl: './permission-table.component.scss',
  providers: [PermissionService],
})
export class PermissionTableComponent extends BaseTableComponent<IPermissionRaw> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<IPermissionRaw[]>();

  override pageIndex = 0;
  override pageSize = PERMISSION_PAGE_SIZE;
  override columns = PERMISSION_COLUMNS;
  override displayedColumns = PERMISSION_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: PermissionService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IPermissionRaw>) {
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
