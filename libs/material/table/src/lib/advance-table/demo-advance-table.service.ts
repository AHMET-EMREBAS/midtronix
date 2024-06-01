import { IAdvanceTableDataService } from './advance-table-data.service';
import { IID } from '@mdtx/common';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  debounceTime,
  map,
  of,
} from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

const data = [
  {
    id: 1,
    name: "John's Object 1",
    category: 'B10',
    createdAt: new Date('2022-03-01T11:26:07.723Z'),
  },
  {
    id: 2,
    name: "Alice's Object 2",
    category: 'B20',
    createdAt: new Date('2023-03-09T15:36:32.423Z'),
  },
  {
    id: 3,
    name: "Bob's Object 3",
    category: 'B30',
    createdAt: new Date('2022-07-21T05:47:03.519Z'),
  },
  {
    id: 4,
    name: "Emma's Object 4",
    category: 'B40',
    createdAt: new Date('2022-10-17T10:02:12.822Z'),
  },
  {
    id: 5,
    name: "Oliver's Object 5",
    category: 'B10',
    createdAt: new Date('2022-08-27T18:14:09.051Z'),
  },
  {
    id: 6,
    name: "Sophia's Object 6",
    category: 'B20',
    createdAt: new Date('2023-03-19T19:40:49.333Z'),
  },
  {
    id: 7,
    name: "James's Object 7",
    category: 'B30',
    createdAt: new Date('2022-11-27T17:52:16.028Z'),
  },
  {
    id: 8,
    name: "Mia's Object 8",
    category: 'B40',
    createdAt: new Date('2023-02-03T09:32:01.867Z'),
  },
  {
    id: 9,
    name: "William's Object 9",
    category: 'B10',
    createdAt: new Date('2023-04-27T07:28:22.381Z'),
  },
  {
    id: 10,
    name: "Charlotte's Object 10",
    category: 'B20',
    createdAt: new Date('2023-01-11T20:02:19.622Z'),
  },
  {
    id: 11,
    name: "John's Object 11",
    category: 'B30',
    createdAt: new Date('2023-01-20T07:55:47.206Z'),
  },
  {
    id: 12,
    name: "Alice's Object 12",
    category: 'B40',
    createdAt: new Date('2022-06-22T04:16:23.102Z'),
  },
  {
    id: 13,
    name: "Bob's Object 13",
    category: 'B10',
    createdAt: new Date('2022-05-02T17:09:14.341Z'),
  },
  {
    id: 14,
    name: "Emma's Object 14",
    category: 'B20',
    createdAt: new Date('2022-10-05T08:42:58.009Z'),
  },
  {
    id: 15,
    name: "Oliver's Object 15",
    category: 'B30',
    createdAt: new Date('2022-12-30T23:45:37.193Z'),
  },
  {
    id: 16,
    name: "Sophia's Object 16",
    category: 'B40',
    createdAt: new Date('2022-09-14T05:32:12.625Z'),
  },
  {
    id: 17,
    name: "James's Object 17",
    category: 'B10',
    createdAt: new Date('2023-03-25T14:09:08.914Z'),
  },
  {
    id: 18,
    name: "Mia's Object 18",
    category: 'B20',
    createdAt: new Date('2022-11-16T16:24:52.287Z'),
  },
  {
    id: 19,
    name: "William's Object 19",
    category: 'B30',
    createdAt: new Date('2022-05-29T11:38:49.932Z'),
  },
  {
    id: 20,
    name: "Charlotte's Object 20",
    category: 'B40',
    createdAt: new Date('2022-10-09T13:06:38.615Z'),
  },
];

export class AdvanceTableService implements IAdvanceTableDataService<IID> {
  search$ = new BehaviorSubject<string>('');
  page$ = new BehaviorSubject<PageEvent | null>(null);
  sort$ = new BehaviorSubject<Sort | null>(null);

  entities$: Observable<IID[]> = combineLatest([
    this.search$,
    this.page$,
    this.sort$,
  ]).pipe(
    debounceTime(600),
    map(([search, page, sort]) => {
      const { pageIndex, pageSize } = page ?? {};
      const { active, direction } = sort ?? {};

      console.table({
        pageIndex,
        pageSize,
        active,
        direction,
      });

      return data
        .filter((entity) => {
          if (entity && search) {
            const searchEach = (item: any, p: any) =>
              item[p]
                ?.toString()
                .toLowerCase()
                .includes(search?.toLowerCase().trim());

            return Object.keys(entity)
              .map((key) => {
                return searchEach(entity, key);
              })
              .reduce((p, k) => p || k);
          }

          return true;
        })
        .sort((a, b) => {
          if (active) {
            const result =
              (a as any)[active] < (b as any)[active]
                ? -1
                : (a as any)[active] > (b as any)[active]
                ? 1
                : 0;

            return direction === 'asc' ? result : result * -1;
          }
          return 1;
        })
        .slice(
          (pageIndex ?? 0) * (pageSize ?? 0),
          (pageIndex ?? 0) * (pageSize ?? 0) + (pageSize ?? 10)
        );
    })
  );

  count$: Observable<number> = of(data.length);

  query(search: string, page: PageEvent, sort: Sort) {
    this.search$.next(search);
    this.page$.next(page);
    this.sort$.next(sort);
    return this.entities$;
  }
}
