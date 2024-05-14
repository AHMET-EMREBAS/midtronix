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
import { Observable } from 'rxjs';

export class CollectionBaseService<
  T extends IID
> extends EntityCollectionServiceBase<T> {
  readonly apiPaths!: RestApiPaths;
  readonly metadata$!: Observable<ResourceMetadata>;
  constructor(
    entity: string,
    factory: EntityCollectionServiceElementsFactory,
    public readonly httpClient: HttpClient
  ) {
    super(entity, factory);
    this.apiPaths = RestApiPathBuilder.get(entity);

    this.metadata$ = this.httpClient.get<ResourceMetadata>(
      this.apiPaths.METADATA_PATH
    );
  }
}
