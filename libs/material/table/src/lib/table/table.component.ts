/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() conditionalColumn = 'id';
  @Output() selectionChange = new EventEmitter();

  ngOnInit(): void {
    if (this.columns) {
      if (!this.displayedColumns) {
        this.displayedColumns = [
          ...this.firstColumns,
          ...this.columns,
          ...this.lastColumns,
        ];
      } else {
        this.displayedColumns = [
          ...this.firstColumns,
          ...this.displayedColumns,
          ...this.lastColumns,
        ];
      }
    }

    if (!this.dataSource) {
      this.dataSource = [];
    }
  }

  selectItem(event: Partial<MatCheckboxChange>, item: any) {
    if (event.checked) {
      this.selectedItems.set(item.id, item);
    } else {
      this.selectedItems.delete(item.id);
    }
    this.selectionChange.emit(this.selectedItems);
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
    this.selectionChange.emit(this.selectedItems);
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

  colMetCondition(row: any) {
    console.log('Chekcing condition : ', row[this.conditionalColumn]);
    return row[this.conditionalColumn] == true;
  }

  colNotMetContion(row: any) {
    return row[this.conditionalColumn] == false;
  }
}
