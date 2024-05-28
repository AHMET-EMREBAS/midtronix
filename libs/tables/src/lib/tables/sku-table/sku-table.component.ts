import { Component } from '@angular/core';
import { SkuViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { SkuViewToolbarComponent } from '../../toolbars';
import {
  SKU_VIEW_COLUMNS,
  SKU_VIEW_DISPLAY_COLUMNS,
  SKU_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ISkuViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-sku-view-table',
  standalone: true,
  imports: [...TableModules, SkuViewToolbarComponent],
  templateUrl: './sku-view-table.component.html',
  styleUrl: './sku-view-table.component.scss',
  providers: [SkuViewService],
})
export class SkuViewTableComponent extends BaseTableComponent<ISkuViewRaw> {
  override pageIndex = 0;
  override pageSize = SKU_VIEW_PAGE_SIZE;
  override columns = SKU_VIEW_COLUMNS;
  override displayedColumns = SKU_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: SkuViewService, protected readonly router: Router) {
    super(service);
  }
}
