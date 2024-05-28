import { Component } from '@angular/core';
import { QuantityService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { QuantityToolbarComponent } from '../../toolbars';
import {
  QUANTITY_COLUMNS,
  QUANTITY_DISPLAY_COLUMNS,
  QUANTITY_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IQuantityRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-quantity-table',
  standalone: true,
  imports: [...TableModules, QuantityToolbarComponent],
  templateUrl: './quantity-table.component.html',
  styleUrl: './quantity-table.component.scss',
  providers: [QuantityService],
})
export class QuantityTableComponent extends BaseTableComponent<IQuantityRaw> {
  override pageIndex = 0;
  override pageSize = QUANTITY_PAGE_SIZE;
  override columns = QUANTITY_COLUMNS;
  override displayedColumns = QUANTITY_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: QuantityService, protected readonly router: Router) {
    super(service);
  }
}
