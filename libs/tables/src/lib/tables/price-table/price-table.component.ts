import { Component } from '@angular/core';
import { PriceService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PriceToolbarComponent } from '../../toolbars';
import {
  PRICE_COLUMNS,
  PRICE_DISPLAY_COLUMNS,
  PRICE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPriceRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-price-table',
  standalone: true,
  imports: [...TableModules, PriceToolbarComponent],
  templateUrl: './price-table.component.html',
  styleUrl: './price-table.component.scss',
  providers: [PriceService],
})
export class PriceTableComponent extends BaseTableComponent<IPriceRaw> {
  override pageIndex = 0;
  override pageSize = PRICE_PAGE_SIZE;
  override columns = PRICE_COLUMNS;
  override displayedColumns = PRICE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: PriceService, protected readonly router: Router) {
    super(service);
  }
}
