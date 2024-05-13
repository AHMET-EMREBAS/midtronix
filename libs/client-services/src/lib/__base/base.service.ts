import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { IID } from '@mdtx/common';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export class BaseNgrxService<
  T extends IID
> extends EntityCollectionServiceBase<T> {
  allCount$: Observable<number> = this.httpClient
    .get<{ count: number }>('')
    .pipe(map((data) => data.count));

  constructor(
    entity: string,
    factory: EntityCollectionServiceElementsFactory,
    public readonly httpClient: HttpClient
  ) {
    super(entity, factory);
  }
}
