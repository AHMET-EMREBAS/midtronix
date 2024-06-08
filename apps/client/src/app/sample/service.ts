import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { ICategory, ISample } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class SampleService extends CollectionBaseService<ISample> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sample', factory, httpClientFactory);
  }
}

@Injectable()
export class CategoryService extends CollectionBaseService<ICategory> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Category', factory, httpClientFactory);
  }
}
