import { Component, ViewChild } from '@angular/core';
import { PermissionService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PermissionToolbarComponent } from '../../toolbars';
import {
  PERMISSION_COLUMNS,
  PERMISSION_DISPLAY_COLUMNS,
  PERMISSION_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPermission } from '@mdtx/common';
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
export class PermissionTableComponent extends BaseTableComponent<IPermission> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = PERMISSION_PAGE_SIZE;
  override columns = PERMISSION_COLUMNS;
  override displayedColumns = PERMISSION_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: PermissionService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IPermission>) {
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

  pageHandler(page: PageEvent) {
    this.service.clearCache();
    this.service.getWithQuery({
      take: page.pageSize,
      skip: page.pageIndex * page.pageSize,
    });
  }
}
