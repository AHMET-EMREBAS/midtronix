import { CollectionBaseService } from '@mdtx/ngrx';
import { ITemplate } from '@mdtx/interface';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TemplateService extends CollectionBaseService<ITemplate> {
  constructor(
    httpClient: HttpClient,
    factory: EntityCollectionServiceElementsFactory
  ) {
    super('Template', factory, httpClient, 'name');
  }
}
