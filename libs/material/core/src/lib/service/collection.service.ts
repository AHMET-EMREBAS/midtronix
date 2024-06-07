import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import {
  ResourceHttpClientFactory,
  IID,
  ResourceHttpClient,
  IBaseCountQuery,
} from '@mdtx/common';

export class CollectionBaseService<
  T extends IID
> extends EntityCollectionServiceBase<T> {
  private readonly resourceHttpClient: ResourceHttpClient;

  constructor(
    entity: string,
    factory: EntityCollectionServiceElementsFactory,
    httpClientFactory: ResourceHttpClientFactory
  ) {
    super(entity, factory);
    this.resourceHttpClient = httpClientFactory.create(entity);
  }

  count(query?: IBaseCountQuery<T, T, T>) {
    return this.resourceHttpClient.count(query);
  }
}
