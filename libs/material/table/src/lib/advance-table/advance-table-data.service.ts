import { IID } from '@mdtx/common';
import { Observable } from 'rxjs';

export interface IAdvanceTableDataService<
  T extends IID,
  TQuery = Record<string, string>
> {
  entities$: Observable<T[]>;
  count$: Observable<number>;
  getWithQuery(query: TQuery): Observable<T[]>;
}
