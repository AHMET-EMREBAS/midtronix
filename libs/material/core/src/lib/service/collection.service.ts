/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  MergeStrategy,
} from '@ngrx/data';
import {
  ResourceHttpClientFactory,
  ResourceHttpClient,
  IBaseCountQuery,
  IClientQueryDto,
} from '@mdtx/common';
import { firstValueFrom } from 'rxjs';
import { LocalStore } from '../localstore';

export class CollectionBaseService<
  T extends { id: any } = any,
  C extends Partial<T> = any,
  U extends Partial<T> = any,
  Q extends IClientQueryDto<T> = any
> extends EntityCollectionServiceBase<T> {
  private readonly allEntitiesStore: LocalStore;
  private readonly resourceHttpClient: ResourceHttpClient;

  constructor(
    entity: string,
    factory: EntityCollectionServiceElementsFactory,
    httpClientFactory: ResourceHttpClientFactory
  ) {
    super(entity, factory);
    this.resourceHttpClient = httpClientFactory.create(entity);
    this.allEntitiesStore = LocalStore.createStore(`${entity}.all`);
  }

  count(query?: IBaseCountQuery<T, T, T>) {
    return this.resourceHttpClient.count(query);
  }

  saveOne(entity: C) {
    return this.add(entity as unknown as T, { isOptimistic: false });
  }

  findAll(query?: Q) {
    this.clearCache();
    return this.getWithQuery(query || {}, {
      isOptimistic: false,
      mergeStrategy: MergeStrategy.OverwriteChanges,
    });
  }

  deleteOneById(id: T['id']) {
    return this.delete(id, { isOptimistic: false });
  }

  updateOne(id: T['id'], entity: U) {
    return this.update({ id, ...entity }, { isOptimistic: false });
  }

  resouceClient() {
    return this.resouceClient;
  }

  async saveAllToLocalStore() {
    const entities = await firstValueFrom(
      this.getAll({ mergeStrategy: MergeStrategy.IgnoreChanges })
    );
    this.allEntitiesStore.set(JSON.stringify(entities));
  }

  getAllFromLocalStore() {
    return this.allEntitiesStore.obj<T[]>();
  }
}
