import { Component } from '@angular/core';
import { SkuViewViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { SkuViewViewToolbarComponent } from '../../toolbars';
import {
  SKU_VIEW_COLUMNS,
  SKU_VIEW_DISPLAY_COLUMNS,
  SKU_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ISkuViewViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-sku-view-view-table',
  standalone: true,
  imports: [...TableModules, SkuViewViewToolbarComponent],
  templateUrl: './sku-view-view-table.component.html',
  styleUrl: './sku-view-view-table.component.scss',
  providers: [SkuViewViewService],
})
export class SkuViewViewTableComponent extends BaseTableComponent<ISkuViewViewRaw> {
  override pageIndex = 0;
  override pageSize = SKU_VIEW_PAGE_SIZE;
  override columns = SKU_VIEW_COLUMNS;
  override displayedColumns = SKU_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: SkuViewViewService, protected readonly router: Router) {
    super(service);
  }
}
