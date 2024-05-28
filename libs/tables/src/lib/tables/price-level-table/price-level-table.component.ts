import { Component } from '@angular/core';
import { PriceLevelService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PriceLevelToolbarComponent } from '../../toolbars';
import {
  PRICE_LEVEL_COLUMNS,
  PRICE_LEVEL_DISPLAY_COLUMNS,
  PRICE_LEVEL_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPriceLevelRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-price-level-table',
  standalone: true,
  imports: [...TableModules, PriceLevelToolbarComponent],
  templateUrl: './price-level-table.component.html',
  styleUrl: './price-level-table.component.scss',
  providers: [PriceLevelService],
})
export class PriceLevelTableComponent extends BaseTableComponent<IPriceLevelRaw> {
  override pageIndex = 0;
  override pageSize = PRICE_LEVEL_PAGE_SIZE;
  override columns = PRICE_LEVEL_COLUMNS;
  override displayedColumns = PRICE_LEVEL_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: PriceLevelService, protected readonly router: Router) {
    super(service);
  }
}
