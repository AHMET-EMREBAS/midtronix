import { Component } from '@angular/core';
import { ProductImageViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductImageViewToolbarComponent } from '../../toolbars';
import {
  PRODUCT_IMAGE_VIEW_COLUMNS,
  PRODUCT_IMAGE_VIEW_DISPLAY_COLUMNS,
  PRODUCT_IMAGE_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProductImageViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-product-image-view-table',
  standalone: true,
  imports: [...TableModules, ProductImageViewToolbarComponent],
  templateUrl: './product-image-view-table.component.html',
  styleUrl: './product-image-view-table.component.scss',
  providers: [ProductImageViewService],
})
export class ProductImageViewTableComponent extends BaseTableComponent<IProductImageViewRaw> {
  override pageIndex = 0;
  override pageSize = PRODUCT_IMAGE_VIEW_PAGE_SIZE;
  override columns = PRODUCT_IMAGE_VIEW_COLUMNS;
  override displayedColumns = PRODUCT_IMAGE_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: ProductImageViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
