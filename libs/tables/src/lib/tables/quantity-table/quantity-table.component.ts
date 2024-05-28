import { Component } from '@angular/core';
import { QuantityViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { QuantityViewToolbarComponent } from '../../toolbars';
import {
  QUANTITY_VIEW_COLUMNS,
  QUANTITY_VIEW_DISPLAY_COLUMNS,
  QUANTITY_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IQuantityViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-quantity-view-table',
  standalone: true,
  imports: [...TableModules, QuantityViewToolbarComponent],
  templateUrl: './quantity-view-table.component.html',
  styleUrl: './quantity-view-table.component.scss',
  providers: [QuantityViewService],
})
export class QuantityViewTableComponent extends BaseTableComponent<IQuantityViewRaw> {
  override pageIndex = 0;
  override pageSize = QUANTITY_VIEW_PAGE_SIZE;
  override columns = QUANTITY_VIEW_COLUMNS;
  override displayedColumns = QUANTITY_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: QuantityViewService, protected readonly router: Router) {
    super(service);
  }
}
