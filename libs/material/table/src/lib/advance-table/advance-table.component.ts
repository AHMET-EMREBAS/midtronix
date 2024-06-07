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
  KeyOf,
  PropertyMetadata,
  TableFields,
} from '@mdtx/common';
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
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionBaseService } from '@mdtx/material/core';
import {
  getAdvanceTableCollectionServiceToken,
  getAdvanceTableMetadataToken,
} from './advance-table.providers';

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
export class AdvanceTableComponent<T extends IBaseEntity> implements OnInit {
  tableColumnNames!: TableFields<T>;
  firstColumn!: PropertyMetadata<T>;
  lastColumn!: PropertyMetadata<T>;
  sortedTableColumns!: PropertyMetadata<T>[];

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
    @Inject(getAdvanceTableMetadataToken())
    protected readonly metadata: ClientEntityMetadata<T>,

    @Inject(getAdvanceTableCollectionServiceToken())
    public readonly service: CollectionBaseService<T>,
    public readonly router: Router,
    public readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tableColumnNames = this.metadata.tableColumnNames();
    this.firstColumn = this.metadata.firstColumn();
    this.lastColumn = this.metadata.lastColumn();
    this.sortedTableColumns = this.metadata.sortedTableColumns();
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
    this.router.navigate(['..', 'editor', row.id], { relativeTo: this.route });
  }
}
