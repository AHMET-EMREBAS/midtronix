import { Component } from '@angular/core';
import { StoreService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { StoreToolbarComponent } from '../../toolbars';
import {
  STORE_COLUMNS,
  STORE_DISPLAY_COLUMNS,
  STORE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IStoreRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-store-table',
  standalone: true,
  imports: [...TableModules, StoreToolbarComponent],
  templateUrl: './store-table.component.html',
  styleUrl: './store-table.component.scss',
  providers: [StoreService],
})
export class StoreTableComponent extends BaseTableComponent<IStoreRaw> {
  override pageIndex = 0;
  override pageSize = STORE_PAGE_SIZE;
  override columns = STORE_COLUMNS;
  override displayedColumns = STORE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: StoreService, protected readonly router: Router) {
    super(service);
  }
}
