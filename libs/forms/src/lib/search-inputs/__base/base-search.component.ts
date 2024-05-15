import { Component } from '@angular/core';
import { IID } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/ngrx';

@Component({ template: '' })
export class BaseSearchComponent<T extends IID> {
  constructor(protected readonly service: CollectionBaseService<T>) {}
}
