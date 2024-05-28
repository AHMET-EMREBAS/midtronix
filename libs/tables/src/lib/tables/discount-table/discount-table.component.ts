import { Component } from '@angular/core';
import { DiscountService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { DiscountToolbarComponent } from '../../toolbars';
import {
  DISCOUNT_COLUMNS,
  DISCOUNT_DISPLAY_COLUMNS,
  DISCOUNT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IDiscountRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-discount-table',
  standalone: true,
  imports: [...TableModules, DiscountToolbarComponent],
  templateUrl: './discount-table.component.html',
  styleUrl: './discount-table.component.scss',
  providers: [DiscountService],
})
export class DiscountTableComponent extends BaseTableComponent<IDiscountRaw> {
  override pageIndex = 0;
  override pageSize = DISCOUNT_PAGE_SIZE;
  override columns = DISCOUNT_COLUMNS;
  override displayedColumns = DISCOUNT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: DiscountService, protected readonly router: Router) {
    super(service);
  }
}
