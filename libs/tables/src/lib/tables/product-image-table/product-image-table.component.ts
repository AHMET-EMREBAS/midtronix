import { Component } from '@angular/core';
import { ProductImageService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductImageToolbarComponent } from '../../toolbars';
import {
  PRODUCT_IMAGE_COLUMNS,
  PRODUCT_IMAGE_DISPLAY_COLUMNS,
  PRODUCT_IMAGE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProductImageRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-product-image-table',
  standalone: true,
  imports: [...TableModules, ProductImageToolbarComponent],
  templateUrl: './product-image-table.component.html',
  styleUrl: './product-image-table.component.scss',
  providers: [ProductImageService],
})
export class ProductImageTableComponent extends BaseTableComponent<IProductImageRaw> {
  override pageIndex = 0;
  override pageSize = PRODUCT_IMAGE_PAGE_SIZE;
  override columns = PRODUCT_IMAGE_COLUMNS;
  override displayedColumns = PRODUCT_IMAGE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProductImageService, protected readonly router: Router) {
    super(service);
  }
}
