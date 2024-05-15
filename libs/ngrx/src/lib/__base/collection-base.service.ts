import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import {
  IID,
  ResourceMetadata,
  RestApiPathBuilder,
  RestApiPaths,
} from '@mdtx/common';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { IInputOption } from '@mdtx/material/core';
export class CollectionBaseService<
  T extends IID
> extends EntityCollectionServiceBase<T> {
  readonly errorMessages$ = new BehaviorSubject('');
  readonly apiPaths!: RestApiPaths;
  readonly metadata$!: Observable<ResourceMetadata>;
  readonly asOptions$!: Observable<IInputOption[]>;
  constructor(
    entity: string,
    factory: EntityCollectionServiceElementsFactory,
    protected readonly httpClient: HttpClient,
    public readonly optionColumn: keyof T = 'id'
  ) {
    super(entity, factory);
    this.apiPaths = RestApiPathBuilder.get(entity);

    this.metadata$ = this.httpClient.get<ResourceMetadata>(
      this.apiPaths.METADATA_PATH
    );

    this.asOptions$ = this.httpClient
      .get<T[]>('api/' + this.apiPaths.PLURAL_PATH + '?take=10000')
      .pipe(
        map((data) => {
          return data.map((d) => {
            return {
              id: d.id,
              name: d[this.optionColumn] + '',
            };
          });
        })
      );
  }

  deleteItem(id: number) {
    return super.delete(id, { isOptimistic: false }).pipe(
      catchError((err, caught) => {
        console.log(err);
        this.errorMessages$.next(err);
        return caught;
      })
    );
  }
}
