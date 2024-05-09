/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'mdtx-table',
  standalone: true,
  imports: [
    CommonModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  readonly firstColumns = ['first', 'second'];
  readonly lastColumns = ['last'];

  readonly selectedItems = new Map();

  @Input() columns!: string[];
  @Input() displayedColumns!: string[];
  @Input() dataSource!: any[];

  ngOnInit(): void {
    if (!this.displayedColumns) {
      this.displayedColumns = [
        ...this.firstColumns,
        ...this.columns,
        ...this.lastColumns,
      ];
    }
  }

  selectItem(event: Partial<MatCheckboxChange>, item: any) {
    if (event.checked) {
      this.selectedItems.set(item.id, item);
    } else {
      this.selectedItems.delete(item.id);
    }
    console.log([...this.selectedItems.entries()]);
  }

  selectAll(event: Partial<MatCheckboxChange>) {
    if (event.checked) {
      this.dataSource.forEach((e) => {
        this.selectItem(event, e);
      });
    } else {
      this.dataSource.forEach((e) => {
        this.selectItem(event, e);
      });
    }
  }

  isAllSelected() {
    return this.dataSource.length === this.selectedItems.size;
  }

  isPartialSelected() {
    return (
      this.selectedItems.size > 0 &&
      this.selectedItems.size < this.dataSource.length
    );
  }
}
