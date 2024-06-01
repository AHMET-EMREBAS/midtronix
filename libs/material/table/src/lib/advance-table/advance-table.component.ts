import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ADVANCE_TABLE_DATA_SERVICE_TOKEN,
  ADVANCE_TABLE_OPTIONS_TOKEN,
} from './advance-table.providers';
import { IID } from '@mdtx/common';
import { AdvanceTableOptions } from './advance-table.types';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BehaviorSubject, combineLatest, debounceTime, switchMap } from 'rxjs';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdvanceTableService } from './demo-advance-table.service';
import { ActivatedRoute, Router } from '@angular/router';

export type QueryType = {
  search: string;
  page: PageEvent;
  sort: Sort;
};
@Component({
  selector: 'mdtx-advance-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './advance-table.component.html',
  styleUrl: './advance-table.component.scss',
})
export class AdvanceTableComponent<T extends IID = IID> {
  selectedItemIds = new Set<number>();
  @ViewChild('tableRef') tableRef!: MatTable<T>;
  @ViewChild('paginatorRef') paginatorRef!: MatPaginator;

  search$ = new BehaviorSubject<string>('');

  page$ = new BehaviorSubject<PageEvent>({
    length: 0,
    pageIndex: 0,
    pageSize: 4,
    previousPageIndex: 0,
  });

  count$ = this.service.countAll$;

  sort$ = new BehaviorSubject<Sort>({ active: 'id', direction: 'asc' });

  data$ = combineLatest([this.search$, this.page$, this.sort$]).pipe(
    debounceTime(600),
    switchMap(([search, page, sort]) => {
      return this.service.advanceQuery(search, page, sort);
    })
  );

  constructor(
    @Inject(ADVANCE_TABLE_OPTIONS_TOKEN)
    public readonly options: AdvanceTableOptions<T>,
    @Inject(ADVANCE_TABLE_DATA_SERVICE_TOKEN)
    public readonly service: AdvanceTableService,
    public readonly router: Router,
    public readonly route: ActivatedRoute
  ) {}

  __columns() {
    return this.options.columns;
  }
  __displayColumns() {
    return this.options.displayColumns;
  }

  __columnNames() {
    return [...this.options.columns.map((e) => e.name)];
  }

  __displayedColumnNames() {
    return this.options.displayColumns.map((e) => e.name);
  }

  columnNames() {
    return ['__firstColumn', ...this.__columnNames()];
  }

  displayedColumnNames() {
    return ['__firstColumn', ...this.__displayedColumnNames()];
  }

  pageChangeHandler(event: PageEvent) {
    this.page$.next(event);
  }

  isAllSelected() {
    return false;
  }

  isSomeSelected() {
    return false;
  }

  isSelected(row: T) {
    return this.selectedItemIds.has(row.id);
  }

  select(row: T) {
    this.selectedItemIds.add(row.id);
  }

  openItemEditor(row: T) {
    this.router.navigate(['..', 'update', row.id], { relativeTo: this.route });
  }
}
