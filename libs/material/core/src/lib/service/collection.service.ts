import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { IID, ResourceHttpClient } from '@mdtx/common';

export class CollectionBaseService<
  T extends IID
> extends EntityCollectionServiceBase<T> {
  private readonly resourceHttpClient: ResourceHttpClient;

  constructor(entity: string, factory: EntityCollectionServiceElementsFactory) {
    super(entity, factory);
    this.resourceHttpClient = new ResourceHttpClient(this.entityName, '');
  }
}
