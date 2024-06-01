import { IID } from '@mdtx/common';
import { Observable } from 'rxjs';

export interface IAdvanceTableDataService<T extends IID> {
  entities$: Observable<T[]>;
  count$: Observable<number>;
  getWithQuery(query: Record<string, any>): Observable<T[]>;
}
