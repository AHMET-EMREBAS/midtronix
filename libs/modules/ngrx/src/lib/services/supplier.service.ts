import { ISupplier } from '@mdtx/common';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CollectionBaseService } from '@mdtx/material/core';

@Injectable()
export class SupplierService extends CollectionBaseService<ISupplier> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Supplier', factory);
  }
}