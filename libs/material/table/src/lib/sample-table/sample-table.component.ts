import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '@mdtx/material/form';
import { FormControl } from '@angular/forms';
import {
  Observable,
  debounceTime,
  map,
  merge,
  mergeAll,
  startWith,
  switchMap,
} from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';

@Component({
  selector: 'mdtx-sample-table',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule,
    MatToolbarModule,
    InputTextComponent,
    MatPaginatorModule,
  ],
  templateUrl: './sample-table.component.html',
  styleUrl: './sample-table.component.scss',
})
export class SampleTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchControl = new FormControl('', []);

  data = [
    { id: 1, name: 'data 1', read: false },
    { id: 2, name: 'data 2', read: true },
    { id: 3, name: 'data 3', read: true },
    { id: 4, name: 'data 4', read: false },
    { id: 5, name: 'data 5', read: false },
    { id: 6, name: 'data 6', read: false },
    { id: 7, name: 'data 7', read: false },
    { id: 8, name: 'data 8', read: false },
    { id: 9, name: 'data 9', read: false },
    { id: 10, name: 'data 10', read: false },
    { id: 11, name: 'data 11', read: false },
    { id: 12, name: 'data 12', read: false },
    { id: 13, name: 'data 13', read: false },
    { id: 14, name: 'data 14', read: false },
    { id: 15, name: 'data 15', read: false },
    { id: 16, name: 'data 16', read: false },
    { id: 17, name: 'data 17', read: false },
    { id: 18, name: 'data 18', read: false },
  ];

  filteredData!: Observable<{ id: number; name: string }[]>;

  ngAfterViewInit(): void {
    this.filteredData = merge(
      this.searchControl.valueChanges,
      this.paginator.page
    ).pipe(
      debounceTime(600),
      startWith(''),
      map(() => {
        return this.filterData(this.searchControl.value);
      }),
      map((data) => {
        return this.paginateData(data);
      })
    );
  }

  handleSelectionChange(event: any) {
    console.log(event);
  }

  deleteSelection(items: Map<number, any>) {
    for (const [key, value] of items) {
      if (key) {
        this.data = this.data.filter((e) => e.id != key);
      }
    }
    this.searchControl.setValue('');
  }

  markAllRead(items: Map<number, any>) {
    for (const [key, value] of items) {
      if (key) {
        this.data.filter((e) => e.id == key).map((e) => (e.read = true));
      }
    }
  }

  paginateData(data: any[]) {
    if (this.paginator) {
      return data.slice(
        this.paginator.pageIndex * this.paginator.pageSize,
        this.paginator.pageSize
      );
    }

    return [];
  }

  filterData(search?: string | null) {
    if (search) {
      return this.data.filter((e) =>
        e.name.toLowerCase().includes(search?.toLowerCase())
      );
    }
    return this.data;
  }
}
