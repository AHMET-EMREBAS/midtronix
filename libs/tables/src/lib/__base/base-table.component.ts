import { Component, OnInit } from '@angular/core';
import { IID } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/ngrx';

@Component({ template: '' })
export class BaseTableComponent<T extends IID> implements OnInit {
  pageIndex = 0;
  pageSize = 20;
  columns = ['id'];
  displayedColumns = ['id'];

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
