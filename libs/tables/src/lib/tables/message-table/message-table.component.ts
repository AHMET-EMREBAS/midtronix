import { Component, ViewChild } from '@angular/core';
import { MessageService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { MessageToolbarComponent } from '../../toolbars';
import {
  MESSAGE_COLUMNS,
  MESSAGE_DISPLAY_COLUMNS,
  MESSAGE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IMessage } from '@mdtx/common';
import { TableComponent } from '@mdtx/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mdtx-message-table',
  standalone: true,
  imports: [...TableModules, MessageToolbarComponent],
  templateUrl: './message-table.component.html',
  styleUrl: './message-table.component.scss',
  providers: [MessageService],
})
export class MessageTableComponent extends BaseTableComponent<IMessage> {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  override pageIndex = 0;
  override pageSize = MESSAGE_PAGE_SIZE;
  override columns = MESSAGE_COLUMNS;
  override displayedColumns = MESSAGE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: MessageService, protected readonly router: Router) {
    super(service);
  }

  selectItems(items: Map<string, IMessage>) {
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
