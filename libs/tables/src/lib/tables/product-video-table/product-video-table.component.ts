import { Component } from '@angular/core';
import { ProductVideoViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductVideoViewToolbarComponent } from '../../toolbars';
import {
  PRODUCT_VIDEO_VIEW_COLUMNS,
  PRODUCT_VIDEO_VIEW_DISPLAY_COLUMNS,
  PRODUCT_VIDEO_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProductVideoViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-product-video-view-table',
  standalone: true,
  imports: [...TableModules, ProductVideoViewToolbarComponent],
  templateUrl: './product-video-view-table.component.html',
  styleUrl: './product-video-view-table.component.scss',
  providers: [ProductVideoViewService],
})
export class ProductVideoViewTableComponent extends BaseTableComponent<IProductVideoViewRaw> {
  override pageIndex = 0;
  override pageSize = PRODUCT_VIDEO_VIEW_PAGE_SIZE;
  override columns = PRODUCT_VIDEO_VIEW_COLUMNS;
  override displayedColumns = PRODUCT_VIDEO_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: ProductVideoViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
