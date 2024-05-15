import { Component, ViewChild } from '@angular/core';
import { RoleService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { RoleToolbarComponent } from '../../toolbars';
import {
  ROLE_COLUMNS,
  ROLE_DISPLAY_COLUMNS,
  ROLE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IRole } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-role-table',
  standalone: true,
  imports: [...TableModules, RoleToolbarComponent],
  templateUrl: './role-table.component.html',
  styleUrl: './role-table.component.scss',
  providers: [RoleService],
})
export class RoleTableComponent extends BaseTableComponent<IRole> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = ROLE_PAGE_SIZE;
  override columns = ROLE_COLUMNS;
  override displayedColumns = ROLE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: RoleService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IRole>) {
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
