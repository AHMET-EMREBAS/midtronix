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
import { Observable, map } from 'rxjs';
import { IInputOption } from '@mdtx/material/core';
export class CollectionBaseService<
  T extends IID
> extends EntityCollectionServiceBase<T> {
  readonly selectedItems = new Map<number, T>();
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

  select(entity: T) {
    this.selectedItems.set(entity.id, entity);
  }

  selectMany(entities: T[]) {
    entities.forEach((e) => this.select(e));
  }

  deselect(id: number) {
    this.selectedItems.delete(id);
  }

  clearSelection() {
    this.selectedItems.clear();
  }

  getSelection() {
    return [...this.selectedItems.entries()].map(([, value]) => value);
  }

  deleteSelection() {
    this.selectedItems.forEach((e) => {
      this.delete(e.id);
    });
  }
}
