import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ClientEntityMetadata,
  IBaseEntity,
  PropertyMetadata,
  TableFields,
} from '@mdtx/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  debounceTime,
  switchMap,
} from 'rxjs';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatSortModule, Sort, SortDirection } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CollectionBaseService,
  LocalStore,
  getEntityMetadataToken,
} from '@mdtx/material/core';

import { InputAutocompleteComponent } from '@mdtx/material/form';

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
    InputAutocompleteComponent,
    MatSortModule,
  ],
  templateUrl: './advance-table.component.html',
  styleUrl: './advance-table.component.scss',
})
export class AdvanceTableComponent<T extends IBaseEntity> implements OnInit {
  withDeleted = false;
  pageIndex = 0;
  pageSize = 0;

  sortBy = 'id';
  sortDir: SortDirection = 'asc';

  pageSizeOptions = [2, 4, 6, 8, 10, 20, 30, 40, 50, 100];

  sortByStore!: LocalStore;
  sortDirStore!: LocalStore;
  selectedItemsStore!: LocalStore;
  pageIndexStore!: LocalStore;
  pageSizeStore!: LocalStore;

  tableColumnNames!: TableFields<T>;
  firstColumn!: PropertyMetadata<T>;
  lastColumn!: PropertyMetadata<T>;
  sortedTableColumns!: PropertyMetadata<T>[];

  @ViewChild('tableRef') tableRef!: MatTable<T>;
  @ViewChild('paginatorRef') paginatorRef!: MatPaginator;

  selectedItems = new Set<number>();

  search$ = new BehaviorSubject<string>('');
  page$!: BehaviorSubject<PageEvent>;
  sort$!: BehaviorSubject<Sort>;
  data$!: Observable<T[]>;

  count$ = this.service.count().then((count) => count.count);

  @Output() changeEvent = new EventEmitter<{
    search: string;
    page: PageEvent;
    sort: Sort;
  }>();

  constructor(
    @Inject(getEntityMetadataToken())
    protected readonly metadata: ClientEntityMetadata<T>,
    public readonly service: CollectionBaseService<T>,
    public readonly router: Router,
    public readonly route: ActivatedRoute
  ) {
    const entityName = service.entityName;

    this.selectedItemsStore = LocalStore.createStore(
      `${entityName}SelectedItems`
    );

    this.pageIndexStore = LocalStore.createStore(`${entityName}PageIndex`);
    this.pageSizeStore = LocalStore.createStore(`${entityName}PageSize`);
    this.sortByStore = LocalStore.createStore(`${entityName}SortBy`);
    this.sortDirStore = LocalStore.createStore(`${entityName}SortDir`);
  }

  ngOnInit(): void {
    const selectedItemsInStore = this.selectedItemsStore.get();
    if (selectedItemsInStore) {
      this.selectedItems = new Set(JSON.parse(selectedItemsInStore));
    }

    this.tableColumnNames = this.metadata.tableColumnNames();
    this.firstColumn = this.metadata.firstColumn();
    this.lastColumn = this.metadata.lastColumn();
    this.sortedTableColumns = this.metadata.sortedColumns();

    this.pageIndex = this.pageIndexStore.int() ?? 0;
    this.pageSize = this.pageSizeStore.int() ?? 4;

    this.page$ = new BehaviorSubject<PageEvent>({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: 1000,
      previousPageIndex: 1,
    });

    this.sortBy = this.sortByStore.get() || 'id';
    this.sortDir = this.sortDirStore.get<SortDirection>() || 'asc';

    this.sort$ = new BehaviorSubject<Sort>({
      active: this.sortBy,
      direction: this.sortDir,
    });

    this.data$ = combineLatest([this.search$, this.page$, this.sort$]).pipe(
      debounceTime(600),
      switchMap(([search, page, sort]) => {
        this.changeEvent.emit({
          search,
          page,
          sort,
        });
        return this.service.findAll({
          take: page.pageSize,
          skip: page.pageIndex * page.pageSize,
          withDeleted: this.withDeleted,
          search,
          order: `${sort.active}:${sort.direction}`,
        });
      })
    );
  }

  pageChangeHandler(event: PageEvent) {
    this.pageIndexStore.set(event.pageIndex + '');
    this.pageSizeStore.set(event.pageSize + '');
    this.page$.next(event);
  }

  sortChangeHandler(event: Sort) {
    this.sortByStore.set(event.active);
    this.sortDirStore.set(event.direction);
    this.sort$.next(event);
  }

  isAllSelected(data: T[]) {
    if (data.length === this.selectedItems.size) {
      return true;
    }
    return false;
  }

  isSomeSelected(data: T[]) {
    if (this.isAllSelected(data)) {
      return false;
    } else {
      if (this.selectedItems.size > 0) {
        return true;
      }
    }
    return false;
  }

  isSelected(row: T) {
    return this.selectedItems.has(row.id);
  }

  toggleSelect(event: MatCheckboxChange, row: T) {
    if (event.checked) {
      this.selectedItems.add(row.id);
      this.selectedItemsStore.set(
        JSON.stringify([...this.selectedItems.values()])
      );
    } else {
      this.selectedItems.delete(row.id);
      this.selectedItemsStore.set(
        JSON.stringify([...this.selectedItems.values()])
      );
    }
  }

  selectAll(event: MatCheckboxChange, data: T[]) {
    for (const item of data) {
      console.log('Updating ... ', event.checked, item);
      this.toggleSelect(event, item);
    }
  }

  openItemEditor(row: T) {
    this.router.navigate(['editor', row.id], { relativeTo: this.route });
  }
}
