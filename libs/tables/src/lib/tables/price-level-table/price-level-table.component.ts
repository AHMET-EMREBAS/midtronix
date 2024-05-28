import { Component } from '@angular/core';
import { PriceLevelViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PriceLevelViewToolbarComponent } from '../../toolbars';
import {
  PRICE_LEVEL_COLUMNS,
  PRICE_LEVEL_DISPLAY_COLUMNS,
  PRICE_LEVEL_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPriceLevelViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-price-level-view-table',
  standalone: true,
  imports: [...TableModules, PriceLevelViewToolbarComponent],
  templateUrl: './price-level-view-table.component.html',
  styleUrl: './price-level-view-table.component.scss',
  providers: [PriceLevelViewService],
})
export class PriceLevelViewTableComponent extends BaseTableComponent<IPriceLevelViewRaw> {
  override pageIndex = 0;
  override pageSize = PRICE_LEVEL_PAGE_SIZE;
  override columns = PRICE_LEVEL_COLUMNS;
  override displayedColumns = PRICE_LEVEL_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: PriceLevelViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
