import { Component, OnInit } from '@angular/core';
import { IID } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';
import { CollectionBaseService } from '@mdtx/ngrx';
import { map } from 'rxjs';

@Component({ template: '' })
export class BaseTableComponent<T extends IID> implements OnInit {
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
}
