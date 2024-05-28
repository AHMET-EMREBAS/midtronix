import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { IID } from '@mdtx/common';
import { TableComponent, TableRow } from '@mdtx/material/table';
import { CollectionBaseService } from '@mdtx/ngrx';
import { map } from 'rxjs';

@Component({ template: '' })
export class BaseTableComponent<T extends IID> implements OnInit {
  @ViewChild('tableRef') table!: TableComponent;
  @ViewChild('paginator') paginator!: MatPaginator;

  @Output() addEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<T[]>();

  count$ = this.service.metadata$.pipe(
    map((data) => {
      console.log(data);
      return data.count;
    })
  );

  columns: TableRow<T>[] = [{ name: 'id' }];
  displayedColumns: TableRow<T>[] = [{ name: 'id' }];

  pageIndex = 0;
  pageSize = 20;
  pageSizeOptions = [4, 8, 10, 20, 50, 100, 200, 500];
  selectedItems?: T[];

  constructor(protected readonly service: CollectionBaseService<T>) {}

  ngOnInit(): void {
    this.service.getWithQuery({
      take: this.pageSize,
      skip: this.pageIndex * this.pageSize,
    });
  }

  select(items: T[]) {
    this.selectedItems = items;
  }

  pageHandler(page: PageEvent) {
    this.service.clearCache();
    this.pageIndex = page.pageIndex;
    this.pageSize = page.pageSize;

    this.service.getWithQuery({
      take: page.pageSize,
      skip: page.pageIndex * page.pageSize,
    });
  }
  deleteSelection() {
    this.deleteEvent.emit(
      [...this.table.selectedItems.entries()].map(([, v]) => v)
    );
    this.table.selectedItems.clear();
  }

  filterItems(searchString: string) {
    this.service.clearCache();
    this.service.getWithQuery({
      take: this.pageSize,
      skip: this.pageIndex * this.pageSize,
      search: searchString,
    });
  }

  selectItems(items: Map<string, T>) {
    this.selectedItems = [...items.entries()].map(([, value]) => value);
  }

  addItem() {
    this.addEvent.emit();
  }
}
