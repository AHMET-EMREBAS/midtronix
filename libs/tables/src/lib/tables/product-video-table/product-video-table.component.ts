import { Component } from '@angular/core';
import { ProductVideoService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductVideoToolbarComponent } from '../../toolbars';
import {
  PRODUCT_VIDEO_COLUMNS,
  PRODUCT_VIDEO_DISPLAY_COLUMNS,
  PRODUCT_VIDEO_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProductVideoRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-product-video-table',
  standalone: true,
  imports: [...TableModules, ProductVideoToolbarComponent],
  templateUrl: './product-video-table.component.html',
  styleUrl: './product-video-table.component.scss',
  providers: [ProductVideoService],
})
export class ProductVideoTableComponent extends BaseTableComponent<IProductVideoRaw> {
  override pageIndex = 0;
  override pageSize = PRODUCT_VIDEO_PAGE_SIZE;
  override columns = PRODUCT_VIDEO_COLUMNS;
  override displayedColumns = PRODUCT_VIDEO_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProductVideoService, protected readonly router: Router) {
    super(service);
  }
}
