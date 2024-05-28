import { Component } from '@angular/core';
import { SkuService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { SkuToolbarComponent } from '../../toolbars';
import {
  SKU_COLUMNS,
  SKU_DISPLAY_COLUMNS,
  SKU_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ISkuRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-sku-table',
  standalone: true,
  imports: [...TableModules, SkuToolbarComponent],
  templateUrl: './sku-table.component.html',
  styleUrl: './sku-table.component.scss',
  providers: [SkuService],
})
export class SkuTableComponent extends BaseTableComponent<ISkuRaw> {
  override pageIndex = 0;
  override pageSize = SKU_PAGE_SIZE;
  override columns = SKU_COLUMNS;
  override displayedColumns = SKU_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: SkuService, protected readonly router: Router) {
    super(service);
  }
}
