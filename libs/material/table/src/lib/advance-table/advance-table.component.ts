import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ADVANCE_TABLE_BULK_ACTIONS_TOKEN,
  ADVANCE_TABLE_COLUMNS_TOKEN,
  ADVANCE_TABLE_DATA_SERVICE_TOKEN,
  ADVANCE_TABLE_ROW_ACTIONS_TOKEN,
} from './advance-table.providers';
import { IAdvanceTableDataService } from './advance-table-data.service';
import { IID } from '@mdtx/common';
import {
  AdvanceTableBulkAction,
  AdvanceTableColumn,
  AdvanceTableRowAction,
} from './advance-table.types';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  map,
  switchMap,
} from 'rxjs';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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

  @Output() queryEvent = new EventEmitter<QueryType>();
  @Output() editButtonClickEvent = new EventEmitter<T>();

  search$ = new BehaviorSubject<string>('');

  page$ = new BehaviorSubject<PageEvent>({
    length: 0,
    pageIndex: 0,
    pageSize: 4,
    previousPageIndex: 0,
  });

  sort$ = new BehaviorSubject<Sort>({ active: 'id', direction: 'asc' });

  @Input() data?: T[];

  query$ = combineLatest([this.search$, this.page$, this.sort$]).pipe(
    debounceTime(600),
    map(([search, page, sort]) => {
      this.queryEvent.emit({ search, page, sort });
    })
  );

  constructor(
    @Inject(ADVANCE_TABLE_COLUMNS_TOKEN)
    public readonly columns: AdvanceTableColumn<T>[],
    @Inject(ADVANCE_TABLE_DATA_SERVICE_TOKEN)
    public readonly service: IAdvanceTableDataService<T>,
    @Inject(ADVANCE_TABLE_ROW_ACTIONS_TOKEN)
    public readonly rowActions: AdvanceTableRowAction<T>[],
    @Inject(ADVANCE_TABLE_BULK_ACTIONS_TOKEN)
    public readonly bulkActions: AdvanceTableBulkAction<T>[]
  ) {}

  getColumnNames() {
    return ['__firstColumn', ...this.columns.map((e) => e.name)];
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
    return [];
  }
}
