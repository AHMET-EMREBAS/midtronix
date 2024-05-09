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
import { IID } from '@mdtx/common';
export interface PeriodicElement {
  id: number;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: 2, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: 3, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: 4, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { id: 5, position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { id: 6, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { id: 7, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { id: 8, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { id: 9, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { id: 10, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

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
export class TableComponent<T extends IID = any> implements OnInit {
  readonly firstColumns = ['first', 'second'];
  readonly lastColumns = ['last'];

  readonly selectedItems = new Map();

  @Input() columns!: string[];
  @Input() displayedColumns!: string[];
  @Input() dataSource!: any[];

  ngOnInit(): void {
    this.columns = ['id', 'name'];
    this.displayedColumns = this.columns;
    this.displayedColumns = [
      ...this.firstColumns,
      ...this.columns,
      ...this.lastColumns,
    ];

    this.dataSource = [
      { id: 1, name: 'some' },
      { id: 2, name: 'another' },
      { id: 3, name: 'other' },
    ];
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
