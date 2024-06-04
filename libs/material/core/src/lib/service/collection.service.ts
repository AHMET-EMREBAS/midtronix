import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { IID } from '@mdtx/common';

export class CollectionBaseService<
  T extends IID
> extends EntityCollectionServiceBase<T> {
  constructor(entity: string, factory: EntityCollectionServiceElementsFactory) {
    super(entity, factory);
  }
}
