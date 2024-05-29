import { Component } from '@angular/core';
import { PurchaseService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { PurchaseToolbarComponent } from '../../toolbars';
import {
  PURCHASE_COLUMNS,
  PURCHASE_DISPLAY_COLUMNS,
  PURCHASE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IPurchaseRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-purchase-table',
  standalone: true,
  imports: [...TableModules, PurchaseToolbarComponent],
  templateUrl: './purchase-table.component.html',
  styleUrl: './purchase-table.component.scss',
  providers: [PurchaseService],
})
export class PurchaseTableComponent extends BaseTableComponent<IPurchaseRaw> {
  override pageIndex = 0;
  override pageSize = PURCHASE_PAGE_SIZE;
  override columns = PURCHASE_COLUMNS;
  override displayedColumns = PURCHASE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: PurchaseService, protected readonly router: Router) {
    super(service);
  }

  markasDeliveredEventHandler() {

    
    this.selectedItems?.forEach((e) => {
      this.service.update({ id: e.id, delivered: true });
    });
  }
}
