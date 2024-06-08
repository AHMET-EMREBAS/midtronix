import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ClientEntityMetadata,
  IBaseEntity,
  KeyOf,
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
  combineLatest,
  debounceTime,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
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
  selectedItemsStore!: LocalStore;
  tableColumnNames!: TableFields<T>;
  firstColumn!: PropertyMetadata<T>;
  lastColumn!: PropertyMetadata<T>;
  sortedTableColumns!: PropertyMetadata<T>[];

  @ViewChild('tableRef') tableRef!: MatTable<T>;
  @ViewChild('paginatorRef') paginatorRef!: MatPaginator;

  selectedItems = new Set<number>();

  search$ = new BehaviorSubject<string>('');

  page$ = new BehaviorSubject<PageEvent>({
    length: 0,
    pageIndex: 0,
    pageSize: 4,
    previousPageIndex: 0,
  });

  count$ = this.service.count().then((count) => count.count);

  sort$ = new BehaviorSubject<Sort>({ active: 'id', direction: 'asc' });

  data$ = combineLatest([this.search$, this.page$, this.sort$]).pipe(
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
        withDeleted: page.pageSize,
        search,
        order: `${sort.active}:${sort.direction}`,
      });
    })
  );

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
    this.selectedItemsStore = LocalStore.createStore(
      service.entityName + 'SelectedItems'
    );
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
  }

  pageChangeHandler(event: PageEvent) {
    this.page$.next(event);
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
    console.log('Selecting Item : ', row);
    if (event.checked) {
      this.selectedItems.add(row.id);
      this.selectedItemsStore.set(
        JSON.stringify([...this.selectedItems.values()])
      );
    } else {
      this.selectedItemsStore.set(
        JSON.stringify([...this.selectedItems.values()])
      );
      this.selectedItems.delete(row.id);
    }
  }

  selectAll(event: MatCheckboxChange, data: T[]) {
    for (const item of data) {
      this.toggleSelect(event, item);
    }
  }

  openItemEditor(row: T) {
    this.router.navigate(['..', 'editor', row.id], { relativeTo: this.route });
  }
}
