import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { IID } from '@mdtx/common';
import { Observable } from 'rxjs';

export interface IAdvanceTableDataService<T extends IID> {
  entities$: Observable<T[]>;
  countAll$: Observable<number>;
  advanceQuery(search: string, page: PageEvent, sort: Sort): Observable<T[]>;
}
