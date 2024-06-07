import { Injectable } from '@angular/core';
import { ResourceHttpClientFactory } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/material/core';
import { ISample } from '@mdtx/models';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

const httpClientFactory = new ResourceHttpClientFactory(`api/v1`);

@Injectable()
export class SampleService extends CollectionBaseService<ISample> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sample', factory, httpClientFactory);

    this.saveOne({ name: 'sample 1' });

    this.findAll({});
  }
}
