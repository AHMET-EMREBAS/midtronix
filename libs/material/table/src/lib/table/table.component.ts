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
import { slideInDownOnEnterAnimation } from 'angular-animations';
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

  animations: [
    slideInDownOnEnterAnimation({
      anchor: 'enter',
      duration: 500,
      delay: 400,
      animateChildren: 'after',
    }),
  ],
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
    for (const a of this.dataSource) {
      if (!this.selectedItems.get(a.id)) {
        return false;
      }
    }
    return true;
  }

  isPartialSelected() {
    if (this.isAllSelected()) {
      return false;
    }

    return this.selectedItems.size > 0;
  }

  colMetCondition(row: any) {
    return row[this.conditionalColumn] == true;
  }

  colNotMetContion(row: any) {
    return row[this.conditionalColumn] == false;
  }
}
