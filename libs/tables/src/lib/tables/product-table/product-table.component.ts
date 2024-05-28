import { Component } from '@angular/core';
import { ProductViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductViewToolbarComponent } from '../../toolbars';
import {
  PRODUCT_VIEW_COLUMNS,
  PRODUCT_VIEW_DISPLAY_COLUMNS,
  PRODUCT_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProductViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-product-view-table',
  standalone: true,
  imports: [...TableModules, ProductViewToolbarComponent],
  templateUrl: './product-view-table.component.html',
  styleUrl: './product-view-table.component.scss',
  providers: [ProductViewService],
})
export class ProductViewTableComponent extends BaseTableComponent<IProductViewRaw> {
  override pageIndex = 0;
  override pageSize = PRODUCT_VIEW_PAGE_SIZE;
  override columns = PRODUCT_VIEW_COLUMNS;
  override displayedColumns = PRODUCT_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProductViewService, protected readonly router: Router) {
    super(service);
  }
}
