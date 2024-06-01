import { IProductRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_OPTION_COLUMN } from '../option-columns';

import { IAdvanceTableDataService } from '@mdtx/material/table';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductService
  extends CollectionBaseService<IProductRaw>
  implements IAdvanceTableDataService<IProductRaw>
{
  static readonly ENTITY_NAME = 'Product';
  static readonly ENTITY_PLURAL_NAME = 'Products';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Product', factory, httpClient, PRODUCT_OPTION_COLUMN);
  }
  countAll$: Observable<number> = of(100);

  advanceQuery(
    search: string,
    page: PageEvent,
    sort: Sort
  ): Observable<IProductRaw[]> {
    return this.getWithQuery({
      search,
      take: page.pageSize,
      skip: page.pageIndex * page.pageSize,
      order: `${sort.active}:${sort.direction}`,
    });
  }
}
