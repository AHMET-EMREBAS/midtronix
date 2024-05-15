import { Component } from '@angular/core';
import { IID } from '@mdtx/common';
import { CollectionBaseService } from '@mdtx/ngrx';

@Component({ template: '' })
export class BaseTableComponent<T extends IID> {
  constructor(protected readonly service: CollectionBaseService<T>) {}

  handleSelection(selectedITems: T[]) {
    this.service.clearSelection()
    this.service.selectMany(selectedITems);
  }
}
