import { Component } from '@angular/core';
import { PriceViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PriceViewToolbarComponent } from '../../toolbars';
import {
  PRICE_VIEW_COLUMNS,
  PRICE_VIEW_DISPLAY_COLUMNS,
  PRICE_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPriceViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-price-view-table',
  standalone: true,
  imports: [...TableModules, PriceViewToolbarComponent],
  templateUrl: './price-view-table.component.html',
  styleUrl: './price-view-table.component.scss',
  providers: [PriceViewService],
})
export class PriceViewTableComponent extends BaseTableComponent<IPriceViewRaw> {
  override pageIndex = 0;
  override pageSize = PRICE_VIEW_PAGE_SIZE;
  override columns = PRICE_VIEW_COLUMNS;
  override displayedColumns = PRICE_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: PriceViewService, protected readonly router: Router) {
    super(service);
  }
}
